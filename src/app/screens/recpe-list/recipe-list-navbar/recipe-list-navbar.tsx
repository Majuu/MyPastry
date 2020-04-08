import React, {Component, ReactElement} from 'react';
import {Text, View} from 'react-native';
import CustomText from '../../../components/custom-text/custom-text';
import {ColorsEnum} from '../../../enums/colors.enum';
import {FontsEnum} from '../../../enums/fonts.enum';
import CustomPicker from '../../../components/custom-picker/custom-picker';
import {styles} from './recipe-list-navbar.styles';

class RecipeListNavbar extends Component {
    public render(): ReactElement {
        return (
            <View style={styles.container}>
                <CustomText style={styles.header} text={'All recipes in one place'} fontSize={30} fontFamily={FontsEnum.SEN_BOLD} color={ColorsEnum.MARBLE}/>
                <View style={styles.contentWrapper}>
                    <View style={styles.picker}>
                        <CustomPicker/>
                    </View>
                    <Text>SomeContent</Text>
                </View>
            </View>
        );
    }
}

export default RecipeListNavbar;
