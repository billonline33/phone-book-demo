import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import axios from 'axios';
import './App.css';
import uniqid from 'uniqid';
import InputForm from './components/InputForm/InputForm';
import EmployeeTable from './components/EmployeeTable/EmployeeTable';
import {
  loadEmployeeList,
  addEmployee,
  startEditEmployee,
  successEditEmployee,
  cancelEditEmployee,
  clickSortFirstName,
  clickSortLastName,
  clickSortPhoneNumber
} from './redux-modules/employees';

const webAPIURL = 'https://phone-book-demo-api.herokuapp.com';

class App extends Component {
  constructor(props) {
    super(props);
    this.initialState = {
      firstNameInput: '',
      lastNameInput: '',
      phoneNumberInput: '',
      filterInput: ''
    };

    this.state = this.initialState;
    this.onClickCancel = this.onClickCancel.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
    this.onClickSortFN = this.onClickSortFN.bind(this);
    this.onClickSortLN = this.onClickSortLN.bind(this);
    this.onClickSortPN = this.onClickSortPN.bind(this);
    this.onFirstNameInputChange = this.onFirstNameInputChange.bind(this);
    this.onLastNameInputChange = this.onLastNameInputChange.bind(this);
    this.onPhoneNumberInputChange = this.onPhoneNumberInputChange.bind(this);
    this.onFilterInputChange = this.onFilterInputChange.bind(this);
    this.onEditEmployeeClick = this.onEditEmployeeClick.bind(this);
    this.resetForm = this.resetForm.bind(this);
  }
  componentDidMount() {
    const { loadEmployeeList } = this.props;

    axios.get(`${webAPIURL}/employees`).then(function(response) {
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
  onFilterInputChange(e) {
    console.log('e.target.value: ', e.target.value);
    this.setState({ filterInput: e.target.value });
  }
  onClickSortFN() {
    this.props.clickSortFirstName();
  }

  onClickSortLN() {
    this.props.clickSortLastName();
  }

  onClickSortPN() {
    this.props.clickSortPhoneNumber();
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
      employee['id'] = uniqid();
      axios.post(`${webAPIURL}/employees`, employee).then(function() {
        addEmployee(employee);
        _resetForm();
      });
    } else {
      const editingId = this.props.editingEmployeeId;
      employee['id'] = editingId;
      axios
        .patch(`${webAPIURL}/employees/` + editingId, employee)
        .then(function() {
          successEditEmployee(employee);
          _resetForm();
        });
    }
  }

  resetForm() {
    this.setState({
      firstNameInput: '',
      lastNameInput: '',
      phoneNumberInput: ''
    });
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
    const {
      employeeList,
      sortFirstName,
      sortLastName,
      sortPhoneNumber
    } = this.props;
    const filter = this.state.filterInput;
    const filterEmployeeList = employeeList.filter(item => {
      return (
        (item.firstName && item.firstName.includes(filter)) ||
        (item.lastName && item.lastName.includes(filter)) ||
        (item.phoneNumber && item.phoneNumber.includes(filter))
      );
    });
    let sortedEmployeeList = [].concat(filterEmployeeList);
    if (sortFirstName != null) {
      if (sortFirstName === 'ASC') {
        sortedEmployeeList = sortedEmployeeList.sort((a, b) =>
          a.firstName.localeCompare(b.firstName)
        );
      } else {
        sortedEmployeeList = sortedEmployeeList.sort((a, b) =>
          b.firstName.localeCompare(a.firstName)
        );
      }
    }
    if (sortLastName != null) {
      if (sortLastName === 'ASC') {
        sortedEmployeeList = sortedEmployeeList.sort((a, b) =>
          a.lastName.localeCompare(b.lastName)
        );
      } else {
        sortedEmployeeList = sortedEmployeeList.sort((a, b) =>
          b.lastName.localeCompare(a.lastName)
        );
      }
    }
    if (sortPhoneNumber != null) {
      if (sortPhoneNumber === 'ASC') {
        sortedEmployeeList = sortedEmployeeList.sort((a, b) =>
          a.phoneNumber.localeCompare(b.phoneNumber)
        );
      } else {
        sortedEmployeeList = sortedEmployeeList.sort((a, b) =>
          b.phoneNumber.localeCompare(a.phoneNumber)
        );
      }
    }

    if (
      sortFirstName === null &&
      sortLastName === null &&
      sortPhoneNumber === null
    ) {
      sortedEmployeeList = filterEmployeeList;
    }

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
          employeeList={sortedEmployeeList}
          onEditEmployeeClick={this.onEditEmployeeClick}
          filter={this.state.filterInput}
          sortFN={this.props.sortFirstName}
          sortLN={this.props.sortLastName}
          sortPN={this.props.sortPhoneNumber}
          onClickSortFN={this.onClickSortFN}
          onClickSortLN={this.onClickSortLN}
          onClickSortPN={this.onClickSortPN}
          onFilterInputChange={this.onFilterInputChange}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  employeeList: state.employees.employeeList,
  editingEmployeeId: state.employees.editingEmployeeId,
  sortFirstName: state.employees.sortFirstName,
  sortLastName: state.employees.sortLastName,
  sortPhoneNumber: state.employees.sortPhoneNumber
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      loadEmployeeList,
      addEmployee,
      cancelEditEmployee,
      successEditEmployee,
      startEditEmployee,
      clickSortFirstName,
      clickSortLastName,
      clickSortPhoneNumber
    },
    dispatch
  );
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
