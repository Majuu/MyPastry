import React, {ReactElement, ReactFragment} from 'react';
import {FlatList, View} from 'react-native';
import {connect} from 'react-redux';
import {modalActions} from '../../store/actions/modal.actions';
import RecipeListNavbar from './recipe-list-navbar/recipe-list-navbar';
import RecipeListItem from './recipe-list-item/recipe-list-item';
import {RecipeListPropsInterface, RecipeListReduxStateInterface} from './recipe-list.interface';
import {styles} from './recipe-list.styles';

class RecipeListScreen extends React.Component<RecipeListPropsInterface> {
    private openModal = () => this.props.dispatch({
        type: modalActions.SHOW_RECIPE_MODAL
    })

    public render(): ReactFragment {
        const {navigation, recipeList} = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.navbar}>
                    <RecipeListNavbar navigation={navigation}/>
                </View>
                <FlatList
                    style={styles.itemList}
                    data={recipeList.allRecipes}
                    renderItem={(item): ReactElement =>
                        <RecipeListItem item={item} onPress={this.openModal} />
                    }
                    keyExtractor={(item): string => item.title}
                />
            </View>
        );
    }
}

export default connect((state: RecipeListReduxStateInterface) => ({
    modal: state.modal.isModalVisible,
    recipeList: state.recipe
}))(RecipeListScreen);
