import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';
import {
   Button,
   InputItem,
   List,
   WingBlank,
   Card,
   WhiteSpace,
   ActivityIndicator
} from 'antd-mobile';
import { emailChanged, passwordChanged, loginUser } from '../actions';


class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChanged(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props;

    this.props.loginUser({ email, password });
  }

  renderButton() {
    if (this.props.loading) {
      return <ActivityIndicator size="large" color="#0080FF" />;
    }

    return (
      <Button type="primary" onClick={this.onButtonPress.bind(this)} style={{ margin: 10 }}>
        Login
      </Button>
    );
  }

  render() {
    return (
      <View>
        <WhiteSpace size="lg" />
        <WingBlank>
          <Card>
          <List>
            <InputItem
              labelNumber="5"
              placeholder="email@gmail.com"
              onChange={this.onEmailChange.bind(this)}
              value={this.props.email}
            >
              Email
            </InputItem>

            <InputItem
              labelNumber="5"
              type="password"
              placeholder="enter password"
              onChange={this.onPasswordChanged.bind(this)}
              value={this.props.password}
            >
              Password
            </InputItem>
          </List>

          <View>
            <Text style={styles.errorTextStyle}>
              {this.props.error}
            </Text>
            {this.renderButton()}
          </View>
          </Card>
        </WingBlank>
      </View>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;
  return {
    email,
    password,
    error,
    loading
  };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);

