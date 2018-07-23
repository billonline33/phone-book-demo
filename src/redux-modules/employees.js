export const LOAD_EMPLOYEE_LIST = "employees/LOAD_EMPLOYEE_LIST";
export const ADD_EMPLOYEE = "employees/ADD_EMPLOYEE";
export const START_EDIT_USER = "employees/START_EDIT_USER";
export const SUCCESS_EDIT_USER = "employees/SUCCESS_EDIT_USER";
export const CANCEL_EDIT_USER = "employees/CANCEL_EDIT_USER";

const initialState = {
  employeeList: [],
  isEditingEmployee: false,
  sortFirstName: null,
  sortLastName: null,
  sortPhoneNumber: null,
  editingEmployeeId: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_EMPLOYEE_LIST:
      return {
        ...state,
        employeeList: action.employeeList
      };

    case ADD_EMPLOYEE:
      return {
        ...state,
        employeeList: [...state.employeeList, action.employee]
      };

    case START_EDIT_USER:
      return {
        ...state,
        editingEmployeeId: action.id
      };
    case CANCEL_EDIT_USER:
      return {
        ...state,
        editingEmployeeId: null
      };
    case SUCCESS_EDIT_USER:
      const editId = state.editingEmployeeId;
      const editedEmployeeList = state.employeeList.map(item => {
        if (item.id === editId) {
          return {
            id: item.id,
            firstName: action.editedInfo.firstName,
            lastName: action.editedInfo.lastName,
            phoneNumber: action.editedInfo.phoneNumber
          };
        } else {
          return item;
        }
      });
      return {
        ...state,
        employeeList: editedEmployeeList
      };
    default:
      return state;
  }
};

export const loadEmployeeList = employeeList => {
  return dispatch => {
    dispatch({
      type: LOAD_EMPLOYEE_LIST,
      employeeList: employeeList
    });
  };
};

export const addEmployee = employee => {
  return dispatch => {
    dispatch({
      type: ADD_EMPLOYEE,
      employee
    });
  };
};

export const startEditEmployee = id => {
  return dispatch => {
    dispatch({
      type: START_EDIT_USER,
      id
    });
  };
};

export const cancelEditEmployee = () => {
  return dispatch => {
    dispatch({
      type: CANCEL_EDIT_USER
    });
  };
};

export const successEditEmployee = editedInfo => {
  return dispatch => {
    dispatch({
      type: SUCCESS_EDIT_USER,
      editedInfo
    });
  };
};
