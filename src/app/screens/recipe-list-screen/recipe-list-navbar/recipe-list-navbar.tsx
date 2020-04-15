import React, {Component, ReactElement} from 'react';
import {View} from 'react-native';
import CustomText from '../../../components/custom-text/custom-text';
import CustomButton from '../../../components/custom-button/custom-button';
import CustomPicker from '../../../components/custom-picker/custom-picker';
import {textPlaceholders} from '../../../consts/text-placeholders.const';
import {ColorsEnum} from '../../../enums/colors.enum';
import {FontsEnum} from '../../../enums/fonts.enum';
import {ScreensEnum} from '../../../enums/screens.enum';
import {styles} from './recipe-list-navbar.styles';

class RecipeListNavbar extends Component {
    public render(): ReactElement {
        const {navigation} = this.props;
        return (
            <View style={styles.container}>
                <CustomText style={styles.header} text={textPlaceholders.allRecipes.title} fontSize={32} fontFamily={FontsEnum.SEN_BOLD} color={ColorsEnum.MARBLE}/>
                <View style={styles.contentWrapper}>
                    <View style={styles.picker}>
                        <CustomPicker/>
                    </View>
                    <CustomButton text={textPlaceholders.allRecipes.goToMyRecipes} onPress={(): void => navigation.navigate(ScreensEnum.INTRO)} />
                </View>
            </View>
        );
    }
}

export default RecipeListNavbar;
