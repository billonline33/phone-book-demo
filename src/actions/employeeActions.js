export const LOAD_EMPLOYEE_LIST = "employees/LOAD_EMPLOYEE_LIST";
export const ADD_EMPLOYEE = "employees/ADD_EMPLOYEE";
export const START_EDIT_USER = "employees/START_EDIT_USER";
export const SUCCESS_EDIT_USER = "employees/SUCCESS_EDIT_USER";
export const CANCEL_EDIT_USER = "employees/CANCEL_EDIT_USER";
export const CLICK_SORT_FN = "employees/ CLICK_SORT_FN";
export const CLICK_SORT_LN = "employees/CLICK_SORT_LN";
export const CLICK_SORT_PN = "employees/CLICK_SORT_PN";


export const loadEmployeeList = employeeList => {
  return {
    type: LOAD_EMPLOYEE_LIST,
    employeeList: employeeList
  };
};

export const addEmployee = employee => {
  return {
    type: ADD_EMPLOYEE,
    employee
  };
};

export const startEditEmployee = id => {
  return {
    type: START_EDIT_USER,
    id
  };
};

export const cancelEditEmployee = () => {
  return {
    type: CANCEL_EDIT_USER
  };
};

export const successEditEmployee = editedInfo => {
  return {
    type: SUCCESS_EDIT_USER,
    editedInfo
  };
};

export const clickSortFirstName = () => {
  return {
    type: CLICK_SORT_FN
  };
};

export const clickSortLastName = () => {
  return {
    type: CLICK_SORT_LN
  };
};

export const clickSortPhoneNumber = () => {
  return {
    type: CLICK_SORT_PN
  };
};
