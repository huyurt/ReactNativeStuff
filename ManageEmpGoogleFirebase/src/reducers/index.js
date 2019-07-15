import {combineReducers} from "redux";
import AuthReducer from './AuthReducer';
import EmployeeFormReducer from "./EmpFormReducer";

export default combineReducers({
    auth: AuthReducer,
    employeeForm: EmployeeFormReducer
});
