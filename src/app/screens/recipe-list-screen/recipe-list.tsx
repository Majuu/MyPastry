import React, {ReactFragment} from 'react';
import {ScrollView, View} from 'react-native';
import {connect} from 'react-redux';
import {SHOW_RECIPE_MODAL} from '../../store/actions/modal.actions';
import RecipeListNavbar from './recipe-list-navbar/recipe-list-navbar';
import RecipeListItem from './recipe-list-item/recipe-list-item';
import CustomModal from '../../components/custom-modal/custom-modal';
import {RecipeListPropsInterface, RecipeListReduxStateInterface} from './recipe-list.interface';
import {styles} from './recipe-list.styles';

class RecipeListScreen extends React.Component<RecipeListPropsInterface> {
    public render(): ReactFragment {
        const {navigation} = this.props;
        return (
            <View style={styles.container}>
                <CustomModal isModalVisible={this.props.modal}/>
                <View style={styles.navbar}>
                    <RecipeListNavbar navigation={navigation}/>
                </View>
                {/*Flatlist here*/}
                <ScrollView style={styles.itemList}>
                    <RecipeListItem onPress={() => this.props.dispatch({type: SHOW_RECIPE_MODAL})}/>
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
    modal: state.modal.isModalVisible
}))(RecipeListScreen);
