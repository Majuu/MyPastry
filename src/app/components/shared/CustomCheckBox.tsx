import React, { FunctionComponent } from 'react';
import { StyleSheet, View } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import CustomText from './CustomText';
import { FontsEnum } from '../../enums/fonts.enum';
import { ColorsEnum } from '../../enums/colors.enum';

interface CustomCheckBoxProps {
  text: string;
  value: boolean;
  onValueChange: any;
}

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  }
});

const CustomCheckBox: FunctionComponent<CustomCheckBoxProps> = ({ text, value, onValueChange }) => {
  return (
    <View style={styles.wrapper}>
      <CheckBox value={value} onValueChange={onValueChange} />
      <CustomText text={text} fontSize={17} fontFamily={FontsEnum.SEN_REGULAR} color={ColorsEnum.DARK_GREEN} />
    </View>
  );
};

export default CustomCheckBox;
