import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import axios from 'axios'
import './App.css';
import InputForm from "./components/InputForm/InputForm";
import EmployeeTable from "./components/EmployeeTable/EmployeeTable";
import {loadEmployeeList} from "./redux-modules/employees";

class App extends Component {
  componentDidMount() {
    const {loadEmployeeList} = this.props

    axios.get('/api/employees').then(function(response) {
      loadEmployeeList(response.data)
    })

  }
  render() {
    const {employeeList} = this.props
    console.log('this.props.employeeList: ', this.props.employeeList)
    return (
      <div className="App">
        <InputForm/>
        <EmployeeTable employeeList={employeeList}/>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  employeeList: state.employees.employeeList
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      loadEmployeeList
    },
    dispatch
  );
export default connect(mapStateToProps, mapDispatchToProps)(App);