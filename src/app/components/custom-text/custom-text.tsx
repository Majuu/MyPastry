import React, {Component, ReactElement} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {CustomTextPropsInterface} from './custom-text.interface';
import {styles} from './custom-text.styles';

class CustomText extends Component<CustomTextPropsInterface> {
    public render(): ReactElement {
        const {fontSize, fontFamily, color} = this.props;
        const propsStyles = StyleSheet.create({
            textStyling: {
                fontSize: fontSize,
                fontFamily: fontFamily,
                color: color
            }
        });
        return (
            <View style={this.props.style}>
                <Text style={[propsStyles.textStyling, styles.textStyles]}>{this.props.text}</Text>
            </View>
        );
    }
}
export default CustomText;
