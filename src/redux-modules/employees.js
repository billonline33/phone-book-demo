import {
  LOAD_EMPLOYEE_LIST,
  ADD_EMPLOYEE,
  START_EDIT_USER,
  SUCCESS_EDIT_USER,
  CANCEL_EDIT_USER,
  CLICK_SORT_FN,
  CLICK_SORT_LN,
  CLICK_SORT_PN
} from "../actions/employeeActions";

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
    return "ASC";
  } else if (curr === "ASC") {
    return "DESC";
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
