import React, { Component } from 'react';
import './App.css';
import InputForm from "./components/InputForm/InputForm";
import EmployeeTable from "./components/EmployeeTable/EmployeeTable";

class App extends Component {
  render() {
    return (
      <div className="App">
        <InputForm/>
        <EmployeeTable/>
      </div>
    );
  }
}

export default App;