import { StyleSheet, TextInput, View } from 'react-native';
import React, { FunctionComponent } from 'react';
import { ColorsEnum } from '../../enums/colors.enum';

interface CustomInputProps {
  placeholder: string;
  multiline?: boolean;
  style?: HTMLStyleElement;
}

const styles = StyleSheet.create({
  container: {
    width: '100%'
  },
  input: {
    borderStyle: 'solid',
    paddingLeft: 15,
    paddingRight: 15,
    fontSize: 18,
    borderWidth: 3,
    borderColor: ColorsEnum.GREEN,
    borderRadius: 5,
    width: '100%',
    textAlignVertical: 'center'
  },
  multilineInput: {
    textAlignVertical: 'top'
  }
});

const CustomInput: FunctionComponent<CustomInputProps> = ({ placeholder, multiline, style }): React.ReactElement => {
  return (
    <View style={{ ...styles.container, ...style }}>
      <TextInput
        multiline={multiline}
        numberOfLines={multiline ? 10 : 1}
        placeholder={placeholder}
        style={multiline ? { ...styles.input, ...styles.multilineInput } : styles.input}
      />
    </View>
  );
};

export default CustomInput;
