import React, { FunctionComponent, useCallback, useState } from 'react';
import { Route, ScrollView, StyleSheet, View } from 'react-native';
import { ColorsEnum } from '../enums/colors.enum';
import CustomText from './shared/CustomText';
import { FontsEnum } from '../enums/fonts.enum';
import CustomInput from './shared/CustomInput';
import CustomPicker from './shared/CustomPicker';
import { pastryCategories } from '../consts/pastry-categories.const';
import CustomButton from './shared/CustomButton';
import CustomCheckBox from './shared/CustomCheckBox';
import { Formik } from 'formik';
import { RecipeListItemInterface } from '../interfaces/recipe.interface';
import { addRecipe } from '../services/dataApi';
import { ScreensEnum } from '../enums/screens.enum';
import { useNavigation } from '@react-navigation/native';
import { calculateTime } from '../helpers/calculateTime';
import { AddRecipeValidationSchema } from '../helpers/validator';
import SlidingTimePicker from './SlidingTimePicker';

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
  },
  submitButton: {
    marginTop: 20,
    marginBottom: 40
  },
  timeButton: {
    marginBottom: 10
  }
});

const initialFormValues: RecipeListItemInterface = {
  title: '',
  category: '',
  time: '',
  description: '',
  sumUp: '',
  authors: '',
  isFavourite: false,
  ingredients: []
};

//ToDo add image later
//ToDo add validator
const AddRecipeScreen: FunctionComponent<{}> = (): React.ReactElement => {
  const [isAddedToFavourites, setIsAddedToFavourites] = useState<boolean>(false);
  const [time, setTime] = useState<string>('00:00:00');
  const [category, setCategory] = useState<string>('');
  const navigation: Route = useNavigation();

  const addToFavourites = useCallback((): void => {
    setIsAddedToFavourites(!isAddedToFavourites);
  }, [isAddedToFavourites, setIsAddedToFavourites]);

  //ToDo add error handling
  const addNewRecipe = async (recipeItems: RecipeListItemInterface): Promise<void> => {
    try {
      await AddRecipeValidationSchema.validate(recipeItems);
      await addRecipe(recipeItems);
      navigation.navigate(ScreensEnum.MENU);
    } catch (e) {
      //ToDo fireup the error message
      console.log(e);
    }
  };

  const setTimeValue = useCallback(async timeValue => {
    const calculatedTime: string = calculateTime(timeValue);
    setTime(calculatedTime);
  }, []);

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
        <Formik
          initialValues={initialFormValues}
          onSubmit={values => addNewRecipe({ ...values, isFavourite: isAddedToFavourites, category, time })}
        >
          {({ handleSubmit, handleChange, values }) => (
            <View style={styles.formContainer}>
              <CustomInput placeholder={'Title'} style={styles.inputsDistance} onChange={handleChange('title')} value={values.title} />
              <CustomPicker style={styles.inputsDistance} list={pastryCategories} onChange={setCategory} />
              <SlidingTimePicker step={5} maxValue={120} minValue={0} onValueChange={setTimeValue} timeValue={time} />
              <CustomInput
                multiline
                placeholder={'Description'}
                style={styles.inputsDistance}
                onChange={handleChange('description')}
                value={values.description}
              />
              <CustomInput
                multiline
                placeholder={'Write some summary'}
                style={styles.inputsDistance}
                onChange={handleChange('sumUp')}
                value={values.sumUp}
              />
              <CustomInput placeholder={'Author'} style={styles.inputsDistance} onChange={handleChange('authors')} value={values.authors} />
              <CustomCheckBox text={'Add to favourites'} value={isAddedToFavourites} onValueChange={addToFavourites} />
              <CustomButton text={'Submit'} onPress={handleSubmit} style={styles.submitButton} />
            </View>
          )}
        </Formik>
      </View>
    </ScrollView>
  );
};

export default AddRecipeScreen;
