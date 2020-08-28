import React, {FunctionComponent, ReactElement} from 'react';
import {FlatList, Route, StyleSheet, View} from 'react-native';
import {connect} from 'react-redux';
import {modalActions} from '../store/actions/modal.actions';
import {Dispatch} from 'redux';
import {RecipeListItemInterface} from '../interfaces/recipe-item.interface';
import {ColorsEnum} from '../enums/colors.enum';
import RecipeListItem from '../components/RecipesList/RecipeListItem';
import RecipeListNavbar from '../components/RecipesList/RecipeListNavbar';

interface AllRecipesScreenProps {
    modal: boolean;
    dispatch: Dispatch;
    navigation: Route;
    //later
    recipeList: {
        allRecipes: RecipeListItemInterface[];
    };
}

interface AllRecipesScreenReduxStateInterface {
    modal: {
        isModalVisible: boolean;
    };
    recipe: RecipeListItemInterface;
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    navbar: {
        flex: 0.22,
        backgroundColor: ColorsEnum.GREEN
    },
    itemList: {
        backgroundColor: ColorsEnum.GREEN,
        display: 'flex',
        flexDirection: 'column',
        flex: 30,
        paddingTop: 2
    }
});

const AllRecipesScreen: FunctionComponent<AllRecipesScreenProps> = ({dispatch, recipeList, navigation}: AllRecipesScreenProps): React.ReactElement => {
    const openModal = () => dispatch({
        type: modalActions.SHOW_RECIPE_MODAL
    });

    return (
        <View style={styles.container}>
            <View style={styles.navbar}>
                <RecipeListNavbar navigation={navigation}/>
            </View>
            <FlatList
                style={styles.itemList}
                data={recipeList.allRecipes}
                renderItem={(item): ReactElement =>
                    <RecipeListItem item={item} key={item.index} onPress={openModal} />
                }
                keyExtractor={(item): string => item.title}
            />
        </View>
    );
};

export default connect((state: AllRecipesScreenReduxStateInterface) => ({
    modal: state.modal.isModalVisible,
    recipeList: state.recipe
}))(AllRecipesScreen);
