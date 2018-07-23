import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import axios from "axios";
import "./App.css";
import uniqid from "uniqid";
import InputForm from "./components/InputForm/InputForm";
import EmployeeTable from "./components/EmployeeTable/EmployeeTable";
import { loadEmployeeList, addEmployee } from "./redux-modules/employees";

class App extends Component {
  constructor(props) {
    super(props);
    this.initialState = {
      firstNameInput: "",
      lastNameInput: "",
      phoneNumberInput: ""
    };

    this.state = this.initialState;
    this.onClickCancel = this.onClickCancel.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
    this.onFirstNameInputChange = this.onFirstNameInputChange.bind(this);
    this.onLastNameInputChange = this.onLastNameInputChange.bind(this);
    this.onPhoneNumberInputChange = this.onPhoneNumberInputChange.bind(this);
    this.resetForm = this.resetForm.bind(this);
  }
  componentDidMount() {
    const { loadEmployeeList } = this.props;

    axios.get("/api/employees").then(function(response) {
      loadEmployeeList(response.data);
    });
  }

  onFirstNameInputChange(e) {
    this.setState({ firstNameInput: e.target.value });
  }
  onLastNameInputChange(e) {
    this.setState({ lastNameInput: e.target.value });
  }
  onPhoneNumberInputChange(e) {
    this.setState({ phoneNumberInput: e.target.value });
  }
  onClickSave() {
    const employee = {
      firstName: this.state.firstNameInput,
      lastName: this.state.lastNameInput,
      phoneNumber: this.state.phoneNumberInput
    };
    const { addEmployee } = this.props;
    const _resetForm = this.resetForm;
    employee["id"] = uniqid();
    axios.post("api/employees", employee).then(function() {
      addEmployee(employee);
      _resetForm();
    });
  }

  resetForm() {
    this.setState(this.initialState);
  }

  onClickCancel() {
    console.log("on click cancel in App");
    this.resetForm();
  }
  render() {
    const { employeeList } = this.props;
    console.log("this.props.employeeList: ", this.props.employeeList);
    return (
      <div className="App">
        <InputForm
          firstName={this.state.firstNameInput}
          lastName={this.state.lastNameInput}
          phoneNumber={this.state.phoneNumberInput}
          onFirstNameInputChange={this.onFirstNameInputChange}
          onLastNameInputChange={this.onLastNameInputChange}
          onPhoneNumberInputChange={this.onPhoneNumberInputChange}
          onClickSave={this.onClickSave}
          onClickCancel={this.onClickCancel}
        />
        <EmployeeTable employeeList={employeeList} />
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
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
