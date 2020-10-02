import { StyleSheet, TextInput, View } from 'react-native';
import React, { FunctionComponent } from 'react';
import { ColorsEnum } from '../../enums/colors.enum';

interface CustomInputProps {
  placeholder: string;
  style?: any;
}

const styles = StyleSheet.create({
  container: {
    width: '100%'
  },
  input: {
    // borderColor: ColorsEnum.DARK_GREEN,
    borderStyle: 'solid',
    // borderWidth: 1,
    // borderRadius: 55,
    paddingLeft: 15,
    paddingRight: 15,
    fontSize: 18,
    borderWidth: 3,
    borderColor: ColorsEnum.GREEN,
    borderRadius: 5,
    width: '100%',
    height: 50
  }
});

const CustomInput: FunctionComponent<CustomInputProps> = ({ placeholder, style }): React.ReactElement => {
  return (
    <View style={{ ...styles.container, ...style }}>
      <TextInput placeholder={placeholder} style={styles.input} />
    </View>
  );
};

export default CustomInput;
