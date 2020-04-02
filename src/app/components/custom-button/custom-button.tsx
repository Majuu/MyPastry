import React, {Component, ReactElement} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {colors} from '../../../styles/colors';
import {ButtonPropsInterface} from './custom-button.interface';
import {styles} from './custom-button.styles';

class CustomButton extends Component<ButtonPropsInterface> {
    public render(): ReactElement {
        return (
            <TouchableOpacity style={styles.container}>
                <View>
                    <Text style={{color: colors.darkGrey, fontSize: 20, fontFamily: 'Sen-Bold', letterSpacing: -0.5}}>{this.props.text}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

export default CustomButton;
