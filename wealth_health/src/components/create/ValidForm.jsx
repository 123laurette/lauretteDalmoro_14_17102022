/*import {createSlice} from "@reduxjs/toolkit"


const initialState = {
    dataEmployee : [],
    isValidForm : false
}

export function unvalidForm() {
    return (dispatch) => {
        dispatch(actions.unvalidForm())
    }
}
export function validForm() {
    return (dispatch) => {
        dispatch(actions.validForm())
    }
}
export function checkValidForm() {
    return (dispatch, getState) => {
        const validForm = selectEmployees(getState()).isValidForm
        return validForm
    }
}

export function submitForm(newEmployee) {
    return async (dispatch, getState) => {
        const isFormCorrect = selectEmployees(getState()).isValidForm
        const getEmployees = selectEmployees(getState()).dataEmployee

        if(isFormCorrect){
            dispatch(actions.submit(newEmployees))
            dispatch(actions.addEmployee(getEmployees, newEmployee))
            return true
        }else{
            return false
        }
    }
}*/