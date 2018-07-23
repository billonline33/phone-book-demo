import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import axios from 'axios'
import './App.css';
import uniqid from 'uniqid'
import InputForm from "./components/InputForm/InputForm";
import EmployeeTable from "./components/EmployeeTable/EmployeeTable";
import {loadEmployeeList, addEmployee} from "./redux-modules/employees";

class App extends Component {
  constructor(props) {
    super(props)
    this.onClickCancel = this.onClickCancel.bind(this)
    this.onClickSave = this.onClickSave.bind(this)
  }
  componentDidMount() {
    const {loadEmployeeList} = this.props

    axios.get('/api/employees').then(function(response) {
      loadEmployeeList(response.data)
    })

  }

  onClickSave(employee) {
    const {addEmployee} = this.props
    employee['id'] = uniqid()
    axios.post('api/employees', employee).then (function() {
      addEmployee(employee)
    })
  }

  onClickCancel() {

  }
  render() {
    const {employeeList} = this.props
    console.log('this.props.employeeList: ', this.props.employeeList)
    return (
      <div className="App">
        <InputForm onClickSave={this.onClickSave}/>
        <EmployeeTable employeeList={employeeList}/>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  employeeList: state.employees.employeeList,
  isEditingEmployee: state.employees.isEditingEmployee

});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      loadEmployeeList,
      addEmployee
    },
    dispatch
  );
export default connect(mapStateToProps, mapDispatchToProps)(App);