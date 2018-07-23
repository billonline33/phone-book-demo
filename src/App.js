import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import axios from "axios";
import "./App.css";
import uniqid from "uniqid";
import InputForm from "./components/InputForm/InputForm";
import EmployeeTable from "./components/EmployeeTable/EmployeeTable";
import {
  loadEmployeeList,
  addEmployee,
  startEditEmployee,
  successEditEmployee,
  cancelEditEmployee
} from "./redux-modules/employees";

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
    this.onEditEmployeeClick = this.onEditEmployeeClick.bind(this);
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
    const { addEmployee, successEditEmployee } = this.props;
    const _resetForm = this.resetForm;
    const employee = {
      firstName: this.state.firstNameInput,
      lastName: this.state.lastNameInput,
      phoneNumber: this.state.phoneNumberInput
    };

    if (this.props.editingEmployeeId === null) {
      employee["id"] = uniqid();
      axios.post("api/employees", employee).then(function() {
        addEmployee(employee);
        _resetForm();
      });
    } else {
      const editingId = this.props.editingEmployeeId;
      employee["id"] = editingId;
      axios.patch("api/employees/" + editingId, employee).then(function() {
        successEditEmployee(employee);
        _resetForm();
      });
    }
  }

  resetForm() {
    this.setState(this.initialState);
  }

  onClickCancel() {
    const { cancelEditEmployee } = this.props;
    if (this.props.editingEmployeeId === null) {
      this.resetForm();
    } else {
      cancelEditEmployee();
      this.resetForm();
    }
  }
  onEditEmployeeClick(id) {
    const { startEditEmployee } = this.props;
    const employee = this.props.employeeList.filter(item => item.id === id)[0];
    this.setState({
      firstNameInput: employee.firstName,
      lastNameInput: employee.lastName,
      phoneNumberInput: employee.phoneNumber
    });
    startEditEmployee(id);
  }

  render() {
    const { employeeList } = this.props;
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
        <EmployeeTable
          employeeList={employeeList}
          onEditEmployeeClick={this.onEditEmployeeClick}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  employeeList: state.employees.employeeList,
  editingEmployeeId: state.employees.editingEmployeeId
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      loadEmployeeList,
      addEmployee,
      cancelEditEmployee,
      successEditEmployee,
      startEditEmployee
    },
    dispatch
  );
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
