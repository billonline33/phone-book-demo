export const LOAD_EMPLOYEE_LIST = 'employees/LOAD_EMPLOYEE_LIST'
export const ADD_EMPLOYEE = 'employees/ADD_EMPLOYEE'

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

    case ADD_EMPLOYEE:
      return {
        ...state,
        employeeList: [...state.employeeList, action.employee]
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

export const addEmployee = (employee) => {
  return dispatch => {
    dispatch({
      type: ADD_EMPLOYEE,
      employee
    })
  }
}