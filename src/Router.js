import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';

const RouterComponent = () => {
    return (
        <Router sceneStyle={{ paddingTop: 55 }}>
            <Scene key="auth">
                <Scene key="login" component={LoginForm} title="Please Login" initial />
            </Scene>
            <Scene key="main">
                <Scene
                    onRight={() => Actions.employeeCreate()}
                    rightTitle="Add"
                    key="employeeList"
                    component={EmployeeList}
                    title="Employees"
                    initial
                />
                <Scene
                    key="employeeCreate"
                    title="Create Employee"
                    component={EmployeeCreate}
                />
                <Scene
                  key="EmployeeEdit"
                  title="Edit Employee"
                  component={EmployeeEdit}
                />
            </Scene>

        </Router>
    );
};

export default RouterComponent;
