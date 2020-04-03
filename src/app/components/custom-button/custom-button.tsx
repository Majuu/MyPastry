import React, {Component, ReactElement} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {ButtonPropsInterface} from './custom-button.interface';
import {ColorsEnum} from '../../enums/colors.enum';
import {styles} from './custom-button.styles';

class CustomButton extends Component<ButtonPropsInterface> {
    public render(): ReactElement {
        return (
            <TouchableOpacity style={[styles.container, this.props.style]} onPress={this.props.onPress}>
                <View>
                    <Text style={{
                        color: ColorsEnum.DARK_GREEN,
                        fontSize: 20,
                        fontFamily: 'Sen-Bold',
                        letterSpacing: -0.5
                    }}>{this.props.text}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

export default CustomButton;
