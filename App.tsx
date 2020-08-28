import React, {Component, ReactElement, ReactNode} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {store} from './src/app/store/store';
import MenuScreen from './src/app/screens/MenuScreen';
import IntroScreen from './src/app/screens/IntroScreen';
import RecipeListScreen from './src/app/screens/AllRecipesScreen';
import MyRecipesScreen from './src/app/screens/UserRecipesScreen';
import LearnBasicsScreen from './src/app/screens/BasicsScreen';
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
