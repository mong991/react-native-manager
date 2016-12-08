import React, { Component } from 'react';
import { Picker, Text, View } from 'react-native';
import { connect } from 'react-redux';
import {
   InputItem,
   Flex
} from 'antd-mobile';
import { employeeUpdate } from '../actions';

class EmployeeeForm extends Component {
  render() {
    return (
      <View>
        <Flex>
          <Flex.Item>
            <InputItem
              placeholder="Jane"
              value={this.props.name}
              onChange={text => this.props.employeeUpdate({ prop: 'name', value: text })}
            >
              Name
            </InputItem>
            </Flex.Item>
        </Flex>
        <Flex>
          <Flex.Item>
            <InputItem
              placeholder="555-555-555"
              value={this.props.phone}
              onChangeText={text => this.props.employeeUpdate({ prop: 'phone', value: text })}
            >
              Phone
            </InputItem>
          </Flex.Item>
        </Flex>
        <Flex>
            <Text style={styles.pickerTextStyle} >Shift</Text>
            <Picker
              style={{ flex: 2 }}
              selectedValue={this.props.shift}
              onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value })}
            >
              <Picker.Item label="Monday" value="Monday" />
              <Picker.Item label="Tuesday" value="Tuesday" />
              <Picker.Item label="Wednesday" value="Wednesday" />
              <Picker.Item label="Thursday" value="Thursday" />
              <Picker.Item label="Friday" value="Friday" />
              <Picker.Item label="Saturday" value="Saturday" />
              <Picker.Item label="Sunday" value="Sunday" />
            </Picker>
        </Flex>
      </View>
    );
  }
}

const styles = {
  pickerTextStyle: {
    flex: 1,
    fontSize: 18,
    paddingLeft: 18,
    paddingTop: 10
  }
};

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;

  return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeeForm);
