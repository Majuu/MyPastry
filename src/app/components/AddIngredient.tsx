import React, { FunctionComponent } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import CustomButton from './shared/CustomButton';
import CustomText from './shared/CustomText';
import { FontsEnum } from '../enums/fonts.enum';
import { ColorsEnum } from '../enums/colors.enum';
import { RecipeIngredient } from '../interfaces/recipe.interface';

interface AddIngredientProps {
  ingredients: RecipeIngredient[];
  setIngredients: any;
}

const styles = StyleSheet.create({
  container: {
    height: '100%'
  },
  ingredientsWrapper: {
    height: '70%'
  },
  buttonWrapper: {
    height: '30%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

const AddIngredient: FunctionComponent<AddIngredientProps> = ({ ingredients, setIngredients }) => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.ingredientsWrapper}>
        {/*ToDo display all added ingredients*/}
        {ingredients.length === 0 && (
          <CustomText text={'The list is empty'} fontSize={30} fontFamily={FontsEnum.SEN_REGULAR} color={ColorsEnum.DARK_GREEN} />
        )}
      </ScrollView>
      <View style={styles.buttonWrapper}>
        {/*ToDo open modal with quick ingredient adding mechanism*/}
        <CustomButton text={'Add ingredient'} onPress={() => {console.log('works')}} />
      </View>
    </View>
  );
};

export default AddIngredient;
