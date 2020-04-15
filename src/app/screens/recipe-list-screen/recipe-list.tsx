import React, {Component, ReactFragment} from 'react';
import {ScrollView, View} from 'react-native';
import RecipeListNavbar from './recipe-list-navbar/recipe-list-navbar';
import RecipeListItem from './recipe-list-item/recipe-list-item';
import {styles} from './recipe-list.styles';
import CustomModal from "../../components/custom-modal/custom-modal";

// ToDo interfaces
class RecipeListScreen extends Component {
    public render(): ReactFragment {
        const {navigation} = this.props;
        return (
            <View style={styles.container}>
                <CustomModal/>
                <View style={styles.navbar}>
                    <RecipeListNavbar navigation={navigation}/>
                </View>
                {/*Flatlist here*/}
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
