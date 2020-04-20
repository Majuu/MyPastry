import React, {ReactFragment} from 'react';
import {ScrollView, View} from 'react-native';
import {connect} from 'react-redux';
import {modalActions} from '../../store/actions/modal.actions';
import RecipeListNavbar from './recipe-list-navbar/recipe-list-navbar';
import RecipeListItem from './recipe-list-item/recipe-list-item';
import CustomModal from '../../components/custom-modal/custom-modal';
import {RecipeListPropsInterface, RecipeListReduxStateInterface} from './recipe-list.interface';
import {styles} from './recipe-list.styles';

class RecipeListScreen extends React.Component<RecipeListPropsInterface> {
    private openModal = () => this.props.dispatch({
        type: modalActions.SHOW_RECIPE_MODAL
    })

    public render(): ReactFragment {
        console.log('recipe reducer: ', this.props.recipe)
        const {navigation} = this.props;
        return (
            <View style={styles.container}>
                <CustomModal isModalVisible={this.props.modal}/>
                <View style={styles.navbar}>
                    <RecipeListNavbar navigation={navigation}/>
                </View>
                {/*Flatlist here*/}
                <ScrollView style={styles.itemList}>
                    <RecipeListItem onPress={this.openModal}/>
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

export default connect((state: RecipeListReduxStateInterface) => ({
    modal: state.modal.isModalVisible,
    recipe: state.recipe
}))(RecipeListScreen);
