import React, {Component, ReactElement} from 'react';
import {TouchableOpacity} from 'react-native';
import CustomText from '../../../components/custom-text/custom-text';
import {FontsEnum} from '../../../enums/fonts.enum';
import {ColorsEnum} from '../../../enums/colors.enum';
import {MenuItemPropsInterface} from './menu-item.interface';
import {styles} from './menu-item.styles';

class MenuItem extends Component<MenuItemPropsInterface> {
    private textFontSize: number = 30;
    public render(): ReactElement {
        const {navigation, image, title, screenToNavigate} = this.props;
        return (
            <TouchableOpacity style={styles.listItem} onPress={(): void => navigation.navigate(screenToNavigate)}>
                <CustomText text={title} fontSize={this.textFontSize} fontFamily={FontsEnum.SEN_BOLD} color={ColorsEnum.DARK_GREEN}/>
                {image}
            </TouchableOpacity>
        );
    }
}

export default MenuItem;
