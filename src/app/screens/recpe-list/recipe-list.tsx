import React, {Component, ReactFragment} from 'react';
import {ScrollView, Text, View} from 'react-native';
import RecipeListItem from './recipe-list-item/recipe-list-item';
import {styles} from './recipe-list.styles';

// ToDo interfaces
class RecipeListScreen extends Component {
    public render(): ReactFragment {
        return (
            <View style={styles.container}>
                <View style={styles.navbar}>
                    <Text>Recipe List Screen Works!</Text>
                </View>
                <ScrollView style={styles.itemList}>
                    <RecipeListItem/>
                    <RecipeListItem/>
                    <RecipeListItem/>
                    <RecipeListItem/>
                    <RecipeListItem/>
                    <RecipeListItem/>
                    <RecipeListItem/>
                    <RecipeListItem/>
                </ScrollView>
            </View>
        );
    }
}

export default RecipeListScreen;
