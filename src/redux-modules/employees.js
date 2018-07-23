export const LOAD_EMPLOYEE_LIST = 'employees/LOAD_EMPLOYEE_LIST'

const initialState = {
  employeeList: [],
  isEditingEmployee: false,
  sortFirstName: null,
  sortLastName: null,
  sortPhoneNumber: null
}

export default (state=initialState, action) => {
  switch(action.type) {
    case LOAD_EMPLOYEE_LIST:
      return {
        ...state,
        employeeList: action.employeeList
      }
    default:
      return state
  }
}

export const loadEmployeeList = (employeeList) => {
  return dispatch => {
    dispatch({
      type: LOAD_EMPLOYEE_LIST ,
      employeeList: employeeList
    })
  }
}