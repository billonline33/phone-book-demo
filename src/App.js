import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import "./App.css";
import InputForm from "./components/InputForm/InputForm";
import EmployeeTable from "./components/EmployeeTable/EmployeeTable";

class App extends Component {
  render() {
    console.log("this.props.employeeList: ", this.props.employeeList);
    return (
      <div className="App">
        <InputForm />
        <EmployeeTable />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  employeeList: state.employees.employeeList
});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
