import React, { FunctionComponent, useCallback, useMemo } from 'react';
import { Route, StyleSheet, View } from 'react-native';
import CustomText from '../shared/CustomText';
import CustomButton from '../shared/CustomButton';
import CustomPicker from '../shared/CustomPicker';
import { textPlaceholders } from '../../consts/text-placeholders.const';
import { ColorsEnum } from '../../enums/colors.enum';
import { FontsEnum } from '../../enums/fonts.enum';
import { ScreensEnum } from '../../enums/screens.enum';
import { pastryCategories } from '../../consts/pastry-categories.const';
import { useRoute } from '@react-navigation/native';

interface RecipeListNavbarProps {
  navigation: Route;
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    flex: 1,
    backgroundColor: ColorsEnum.LIGHT_GREEN,
    borderBottomColor: ColorsEnum.GREEN,
    borderBottomWidth: 2
  },
  picker: {
    width: '50%'
  },
  contentWrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
    padding: 8,
    marginTop: 3
  },
  header: {
    marginTop: 15
  }
});

const RecipeListNavbar: FunctionComponent<RecipeListNavbarProps> = ({ navigation }: RecipeListNavbarProps) => {
  const route = useRoute();
  // @ts-ignore
  const isFavouriteRecipesScreen: boolean = route.params && route.params.isMyRecipes;

  const buttonText: string = useMemo(() => {
    const { goToAllRecipes, goToMyRecipes } = textPlaceholders.allRecipes;
    return isFavouriteRecipesScreen ? goToAllRecipes : goToMyRecipes;
  }, [isFavouriteRecipesScreen]);

  const navigateBetweenLists = useCallback((): void => {
    navigation.navigate(ScreensEnum.RECIPE_LIST, { isMyRecipes: !isFavouriteRecipesScreen });
  }, [route]);

  return (
    <View style={styles.container}>
      <CustomText
        style={styles.header}
        text={textPlaceholders.allRecipes.title}
        fontSize={32}
        fontFamily={FontsEnum.SEN_BOLD}
        color={ColorsEnum.DARK_GREEN}
      />
      <View style={styles.contentWrapper}>
        <View style={styles.picker}>
          <CustomPicker list={pastryCategories} onChange={() => {}} />
        </View>
        {/*ToDo change behaviour between all and my recipes*/}
        <CustomButton text={buttonText} onPress={navigateBetweenLists} />
      </View>
    </View>
  );
};

export default RecipeListNavbar;
