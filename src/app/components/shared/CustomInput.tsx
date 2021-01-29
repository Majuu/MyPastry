import { StyleSheet, TextInput, View } from 'react-native';
import React, { ChangeEvent, FunctionComponent } from 'react';
import { ColorsEnum } from '../../enums/colors.enum';
import { FontsEnum } from '../../enums/fonts.enum';

interface CustomInputProps {
  placeholder: string;
  onChange: (e: string | ChangeEvent<any>) => void;
  //ToDo correct the typing
  value: string;
  autoFocus: boolean;
  multiline?: boolean;
  style?: HTMLStyleElement;
}

const styles = StyleSheet.create({
  container: {
    width: '100%'
  },
  input: {
    paddingLeft: 15,
    paddingRight: 15,
    fontSize: 18,
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: ColorsEnum.GREEN,
    borderRadius: 15,
    width: '100%',
    textAlignVertical: 'center',
    fontFamily: FontsEnum.SEN_REGULAR,
    color: ColorsEnum.DARK_GREEN
  },
  multilineInput: {
    textAlignVertical: 'top'
  }
});

const CustomInput: FunctionComponent<CustomInputProps> = ({
  placeholder,
  value,
  onChange,
  autoFocus,
  multiline,
  style
}): React.ReactElement => {
  return (
    <View style={{ ...styles.container, ...style }}>
      <TextInput
        multiline={multiline}
        numberOfLines={multiline ? 10 : 1}
        placeholder={placeholder}
        style={multiline ? { ...styles.input, ...styles.multilineInput } : styles.input}
        onChangeText={onChange}
        value={value}
        autoFocus={autoFocus}
      />
    </View>
  );
};

export default CustomInput;
