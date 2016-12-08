import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import {
   Card,
   Button,
   List,
   WhiteSpace,
   WingBlank
} from 'antd-mobile';
import { employeeUpdate, employeeCreate } from '../actions';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {
  onButtonPress() {
    const { name, phone, shift } = this.props;

    this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
  }

  render() {
    return (
      <View>
        <WhiteSpace size="lg" />
        <WingBlank>
        <Card>
          <List>
            <EmployeeForm {...this.props} />
            <Button style={styles.buttonStyle} type="primary" onClick={this.onButtonPress.bind(this)}>
              Create
            </Button>
          </List>
        </Card>
        </WingBlank>
      </View>
    );
  }
}

const styles = {
  buttonStyle: {
    margin: 10
  }
};

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;

  return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate, employeeCreate })(EmployeeCreate);
