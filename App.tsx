import React, {Component, ReactNode} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import HomeScreen from './src/app/screens/home/home-screen';
import LoginScreen from './src/app/screens/login/login-screen';

const Stack = createStackNavigator();
class App extends Component {
    public render(): ReactNode {
        return (
            <NavigationContainer>
                <Stack.Navigator screenOptions={{headerShown: false}}>
                    <Stack.Screen name={'Home'} component={HomeScreen} />
                    <Stack.Screen name={'Login'} component={LoginScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}
export default App;
