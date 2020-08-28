import React, {FunctionComponent} from 'react';
import {Image, Route, StyleSheet, TouchableOpacity} from 'react-native';
import CustomText from './CustomText';
import {FontsEnum} from '../enums/fonts.enum';
import {ColorsEnum} from '../enums/colors.enum';
import {ScreensEnum} from '../enums/screens.enum';

interface MenuItemProps {
    navigation: Route;
    screenToNavigate: ScreensEnum;
    title: string;
    image: Image;
}

const styles = StyleSheet.create({
    listItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1,
        borderRadius: 10,
        backgroundColor: ColorsEnum.GREEN,
        margin: 10,
        padding: 20
    }
});

const MenuItem: FunctionComponent<MenuItemProps> = ({navigation, title, image, screenToNavigate}: MenuItemProps): React.ReactElement => {
    const textFontSize = 30;
    return (
        <TouchableOpacity
            style={styles.listItem}
            onPress={(): void => navigation.navigate(screenToNavigate)}
        >
            <CustomText
                text={title}
                fontSize={textFontSize}
                fontFamily={FontsEnum.SEN_BOLD}
                color={ColorsEnum.DARK_GREEN}
            />
            {image}
        </TouchableOpacity>
    );
};

export default MenuItem;
