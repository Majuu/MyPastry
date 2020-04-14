import React, {Component, ReactNode} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import MenuScreen from './src/app/screens/menu/menu';
import {ScreensEnum} from './src/app/enums/screens.enum';
import IntroScreen from './src/app/screens/intro/intro-screen';
import RecipeListScreen from './src/app/screens/recpe-list/recipe-list';
import MyRecipesScreen from './src/app/screens/my-recipes-screen/my-recipes-screen';
import LearnBasicsScreen from './src/app/screens/learn-basics-screen/learn-basics-screen';

const Stack = createStackNavigator();

class App extends Component {
    public render(): ReactNode {
        return (
            <NavigationContainer>
                <Stack.Navigator screenOptions={{headerShown: false}}>
                    <Stack.Screen name={ScreensEnum.INTRO} component={IntroScreen} />
                    <Stack.Screen name={ScreensEnum.MENU} component={MenuScreen} />
                    <Stack.Screen name={ScreensEnum.RECIPE_LIST} component={RecipeListScreen} />
                    <Stack.Screen name={ScreensEnum.MY_RECIPES} component={MyRecipesScreen} />
                    <Stack.Screen name={ScreensEnum.LEARN_BASICS} component={LearnBasicsScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}

export default App;
