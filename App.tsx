import React, {Component, ReactNode} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import HomeScreen from './src/app/screens/home/home-screen';
import LoginScreen from './src/app/screens/login/login-screen';
import MenuScreen from './src/app/screens/menu/menu';
import {ScreensEnum} from './src/app/enums/screens.enum';

const Stack = createStackNavigator();

class App extends Component {
    public render(): ReactNode {
        return (
            <NavigationContainer>
                <Stack.Navigator screenOptions={{headerShown: false}}>
                    <Stack.Screen name={ScreensEnum.HOME} component={HomeScreen} />
                    <Stack.Screen name={ScreensEnum.LOGIN} component={LoginScreen} />
                    <Stack.Screen name={ScreensEnum.MENU} component={MenuScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}
export default App;
