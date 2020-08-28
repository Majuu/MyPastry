import React, {FunctionComponent} from 'react';
import {Route, StyleSheet, View} from 'react-native';
import CustomText from '../CustomText';
import CustomButton from '../CustomButton';
import CustomPicker from '../CustomPicker';
import {textPlaceholders} from '../../consts/text-placeholders.const';
import {ColorsEnum} from '../../enums/colors.enum';
import {FontsEnum} from '../../enums/fonts.enum';
import {ScreensEnum} from '../../enums/screens.enum';

interface RecipeListNavbarProps {
    navigation: Route;
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        flex: 1,
        backgroundColor: ColorsEnum.LIGHT_GREEN,
        borderBottomColor: ColorsEnum.GREEN,
        borderBottomWidth: 2
    },
    picker: {
        width: '50%'
    },
    contentWrapper: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        flex: 1,
        padding: 8,
        marginTop: 3
    },
    header: {
        marginTop: 15
    }
});

const RecipeListNavbar: FunctionComponent<RecipeListNavbarProps> = ({navigation}: RecipeListNavbarProps) =>
    <View style={styles.container}>
        <CustomText
            style={styles.header}
            text={textPlaceholders.allRecipes.title}
            fontSize={32}
            fontFamily={FontsEnum.SEN_BOLD}
            color={ColorsEnum.DARK_GREEN}
        />
        <View style={styles.contentWrapper}>
            <View style={styles.picker}>
                <CustomPicker />
            </View>
            <CustomButton
                text={textPlaceholders.allRecipes.goToMyRecipes}
                onPress={(): void => navigation.navigate(ScreensEnum.MY_RECIPES)}
            />
        </View>
    </View>;


export default RecipeListNavbar;
