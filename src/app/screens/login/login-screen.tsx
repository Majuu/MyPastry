import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

class LoginScreen extends Component {
  public render() {
    const {navigation} = this.props;
    return (
      <View>
        <Text>Login screen works!</Text>
        <Button
          title={'Navigate me'}
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    );
  }
}
export default LoginScreen;
