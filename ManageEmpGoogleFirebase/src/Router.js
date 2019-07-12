import React from 'react';
import {Scene, Router, Actions} from "react-native-router-flux";
import LoginForm from './components/LoginForm';
import EmployeeList from "./components/EmpList";
import EmployeeCreate from './components/EmpCreate';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root" hideNavBar>
                <Scene key="auth">
                    <Scene key="login" component={LoginForm} title="Giriş Yap"/>
                </Scene>
                <Scene key="main">
                    <Scene
                        rightTitle="Ekle"
                        onRight={() => Actions.employeeCreate()}
                        key="employeeList"
                        component={EmployeeList}
                        title="Çalışanlar"
                        initial
                    />
                    <Scene key="employeeCreate" component={EmployeeCreate} title="Çalışan Ekle"/>
                </Scene>
            </Scene>
        </Router>
    );
};

export default RouterComponent;
