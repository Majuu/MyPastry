import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { ColorsEnum } from '../enums/colors.enum';
import CustomText from './shared/CustomText';
import { FontsEnum } from '../enums/fonts.enum';
import CustomInput from './shared/CustomInput';
import CustomPicker from './shared/CustomPicker';
import { pastryCategories } from '../consts/pastry-categories.const';
import CustomButton from './shared/CustomButton';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: ColorsEnum.LIGHT_GREEN,
    padding: 15
  },
  container: {
    alignItems: 'center'
  },
  title: {
    marginTop: 30
  },
  input: {
    borderColor: ColorsEnum.DARK_GREEN,
    borderStyle: 'solid',
    borderWidth: 1,
    width: '100%',
    borderRadius: 15,
    paddingLeft: 15,
    paddingRight: 15
  },
  formContainer: {
    alignItems: 'center',
    width: '80%',
    marginTop: 20
  },
  inputsDistance: {
    marginBottom: 10
  }
});

const AddRecipeScreen = (): React.ReactElement => {
  return (
    <ScrollView style={styles.wrapper}>
      <View style={styles.container}>
        <CustomText text={'Add recipe'} fontSize={40} fontFamily={FontsEnum.SEN_BOLD} color={ColorsEnum.DARK_GREEN} style={styles.title} />
        <CustomText
          text={`The place where you add your own recipes. Did you find one somewhere and don't want to lose it? Or maybe you are creating something new? Here you will save it!`}
          fontSize={20}
          fontFamily={FontsEnum.SEN_REGULAR}
          color={ColorsEnum.DARK_GREEN}
          style={styles.title}
        />
        {/*title, ingredients, instructions, sum up, author*/}
        <View style={styles.formContainer}>
          <CustomPicker style={styles.inputsDistance} list={pastryCategories} />
          <CustomInput placeholder={'Recipe title'} style={styles.inputsDistance} />
          <CustomInput multiline placeholder={'Recipe Description'} style={styles.inputsDistance} />
          <CustomInput multiline placeholder={'Write some summary'} style={styles.inputsDistance} />
          <CustomInput placeholder={'Author'} style={styles.inputsDistance} />
          <CustomButton
            text={'Submit'}
            onPress={() => {
              console.log('Submitted');
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default AddRecipeScreen;
