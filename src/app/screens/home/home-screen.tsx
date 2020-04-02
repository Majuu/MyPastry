import React, {Component, ReactElement} from 'react';
import {View, Text} from 'react-native';
import {styles} from './home-screen.styles';
import CustomButton from '../../components/custom-button/custom-button';
// import LoginScreen from "../login/login-screen";

class HomeScreen extends Component {
    public render(): ReactElement {
        const {navigation} = this.props;
        return (
            <View style={styles.container}>
                <Text style={{fontFamily: 'Sen-Bold', fontSize: 30}}>Home screen works!</Text>
                {/*<Button*/}
                {/*    title={'Navigate me'}*/}
                {/*    onPress={(): void => navigation.navigate(LoginScreen)}*/}
                {/*/>*/}

                <CustomButton text={'Let\'s get started!'}/>
            </View>
        );
    }
}
export default HomeScreen;
