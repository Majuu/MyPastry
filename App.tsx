import React, {Component, ReactElement, ReactNode} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {store} from './src/app/store/store';
import MenuScreen from './src/app/screens/menu-screen/menu';
import IntroScreen from './src/app/screens/intro-screen/intro-screen';
import RecipeListScreen from './src/app/screens/recipe-list-screen/recipe-list';
import MyRecipesScreen from './src/app/screens/my-recipes-screen/my-recipes-screen';
import LearnBasicsScreen from './src/app/screens/learn-basics-screen/learn-basics-screen';
import {ScreensEnum} from './src/app/enums/screens.enum';

const Stack = createStackNavigator();

class App extends Component {
    private stackScreens = [
        {name: ScreensEnum.INTRO, component: IntroScreen},
        {name: ScreensEnum.MENU, component: MenuScreen},
        {name: ScreensEnum.RECIPE_LIST, component: RecipeListScreen},
        {name: ScreensEnum.MY_RECIPES, component: MyRecipesScreen},
        {name: ScreensEnum.LEARN_BASICS, component: LearnBasicsScreen}
    ]

    public render(): ReactNode {
        return (
            <Provider store={store}>
                <NavigationContainer>
                    <Stack.Navigator screenOptions={{headerShown: false}}>
                        {this.stackScreens.map((item): ReactElement =>
                            <Stack.Screen key={item.name} name={item.name} component={item.component} />
                        )}
                    </Stack.Navigator>
                </NavigationContainer>
            </Provider>
        );
    }
}

export default App;
