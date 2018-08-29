export const LOAD_EMPLOYEE_LIST = 'employees/LOAD_EMPLOYEE_LIST';
export const ADD_EMPLOYEE = 'employees/ADD_EMPLOYEE';
export const START_EDIT_USER = 'employees/START_EDIT_USER';
export const SUCCESS_EDIT_USER = 'employees/SUCCESS_EDIT_USER';
export const CANCEL_EDIT_USER = 'employees/CANCEL_EDIT_USER';
export const CLICK_SORT_FN = 'employees/ CLICK_SORT_FN';
export const CLICK_SORT_LN = 'employees/CLICK_SORT_LN';
export const CLICK_SORT_PN = 'employees/CLICK_SORT_PN';

const initialState = {
  employeeList: [],
  isEditingEmployee: false,
  sortFirstName: null,
  sortLastName: null,
  sortPhoneNumber: null,
  editingEmployeeId: null
};

const nextSortSetting = curr => {
  if (curr === null) {
    return 'ASC';
  } else if (curr === 'ASC') {
    return 'DESC';
  } else {
    return null;
  }
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

    case CLICK_SORT_FN:
      return {
        ...state,
        sortFirstName: nextSortSetting(state.sortFirstName),
        sortLastName: null,
        sortPhoneNumber: null
      };

    case CLICK_SORT_LN:
      return {
        ...state,
        sortLastName: nextSortSetting(state.sortLastName),
        sortFirstName: null,
        sortPhoneNumber: null
      };
    case CLICK_SORT_PN:
      return {
        ...state,
        sortPhoneNumber: nextSortSetting(state.sortPhoneNumber),
        sortFirstName: null,
        sortLastName: null
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

export const clickSortFirstName = () => {
  return dispatch => {
    dispatch({
      type: CLICK_SORT_FN
    });
  };
};

export const clickSortLastName = () => {
  return dispatch => {
    dispatch({
      type: CLICK_SORT_LN
    });
  };
};

export const clickSortPhoneNumber = () => {
  return dispatch => {
    dispatch({
      type: CLICK_SORT_PN
    });
  };
};
