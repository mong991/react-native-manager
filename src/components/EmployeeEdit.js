import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Alert } from 'react-native';
import Communications from 'react-native-communications';
import {
   Card,
   Button,
   List,
   WhiteSpace,
   WingBlank,
   Modal
} from 'antd-mobile';
import { employeeUpdate, employeeSave, employeeDelete } from '../actions';
import { Confirm } from './common';
import EmployeeForm from './EmployeeForm';

class EmployeeEdit extends Component {
  state = { showModal: false };
  componentWillMount() {
    _.each(this.props.employee, (value, prop) => {
      this.props.employeeUpdate({ prop, value });
    });
  }
  onButtonPress() {
    const { name, phone, shift } = this.props;

    this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid });
  }

  onTextPress() {
    const { phone, shift } = this.props;

    Communications.text(phone, `Your upcoming shift is on ${shift}`);
  }

  onAccept() {
    const { uid } = this.props.employee;

    this.props.employeeDelete({ uid });
  }

  onDecline() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <View>
        <WhiteSpace size="lg" />
        <WingBlank>
        <Card>
          <List>
            <EmployeeForm />
            <Button type="primary" style={styles.buttonStyle} onClick={this.onButtonPress.bind(this)}>
              Save Changes
            </Button>
            <Button type="primary" style={styles.buttonStyle} onClick={this.onTextPress.bind(this)}>
              Text Schedule
            </Button>
            <Button type="primary" style={styles.buttonStyle} onClick={() => this.setState({ showModal: !this.state.showModal })}>
              Fire Employee
            </Button>
            <Confirm
              visible={this.state.showModal}
              onAccept={this.onAccept.bind(this)}
              onDecline={this.onDecline.bind(this)}
            >
              Are you sure want to delect this?
            </Confirm>
          </List>
        </Card>
        </WingBlank>
      </View>
    );
  }
}

const styles = {
    buttonStyle: {
        alignSelf: 'stretch',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10
    }
};

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;

  return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate, employeeSave, employeeDelete })(EmployeeEdit);
