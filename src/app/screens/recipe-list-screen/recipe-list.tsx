import React, {Component, ReactFragment} from 'react';
import {ScrollView, View} from 'react-native';
import RecipeListNavbar from './recipe-list-navbar/recipe-list-navbar';
import RecipeListItem from './recipe-list-item/recipe-list-item';
import CustomModal from '../../components/custom-modal/custom-modal';
import {styles} from './recipe-list.styles';
import {connect} from 'react-redux';
import {rootInitialState} from '../../store/reducers/index';

// ToDo interfaces

interface RecipePropsInterface {
    modal?: boolean;
}
class RecipeListScreen extends Component<RecipePropsInterface> {
    public render(): ReactFragment {
        console.log(this.props);
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

interface State {
    modal: {
        isModalVisible: boolean;
    };
}

// const mapStateToProps = (state: State) => {
//     state.modal.isModalVisible;
// };
//
// const RecipeScreen = connect({
//         mapStateToProps
//
// }
// )(RecipeListScreen);

export default connect((state) => ({
    modal: state.modal
}))(RecipeListScreen);

// export default RecipeScreen;
