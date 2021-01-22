import React, { FunctionComponent, ReactElement, useEffect, useMemo, useState } from 'react';
import { FlatList, ListRenderItemInfo, Route, StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import { modalActions } from '../store/actions/modal.actions';
import { Dispatch } from 'redux';
import { RecipeListItemInterface } from '../interfaces/recipe.interface';
import { ColorsEnum } from '../enums/colors.enum';
import RecipeListItem from '../components/RecipesList/RecipeListItem';
import RecipeListNavbar from '../components/RecipesList/RecipeListNavbar';
import CustomModal from '../components/shared/CustomModal';
import { getAllRecipes, getFavouritesRecipes } from '../services/dataApi';
import { recipeActions } from '../store/actions/recipe.actions';
import { useRoute } from '@react-navigation/native';

interface AllRecipesScreenProps {
  modal: boolean;
  dispatch: Dispatch;
  navigation: Route;
  //later
  allRecipes: RecipeListItemInterface[];
  favouriteRecipes: RecipeListItemInterface[];
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  navbar: {
    flex: 0.22,
    backgroundColor: ColorsEnum.GREEN
  },
  itemList: {
    backgroundColor: ColorsEnum.GREEN,
    display: 'flex',
    flexDirection: 'column',
    flex: 30,
    paddingTop: 2
  }
});

const AllRecipesScreen: FunctionComponent<AllRecipesScreenProps> = ({
  dispatch,
  allRecipes,
  favouriteRecipes,
  navigation
}: AllRecipesScreenProps): React.ReactElement => {
  const [itemInModal, setItemInModal] = useState<any>(null);
  const route = useRoute();
  //ToDo check typing
  // @ts-ignore
  const isFavouriteRecipesScreen: boolean = route.params && route.params.isMyRecipes;
  const itemsToGenerate: RecipeListItemInterface[] = useMemo(() => {
    return isFavouriteRecipesScreen ? favouriteRecipes : allRecipes;
  }, [isFavouriteRecipesScreen, allRecipes, favouriteRecipes]);

  const setAllRecipes = async () => {
    const result = await getAllRecipes();
    if (result) {
      dispatch({
        type: recipeActions.SET_ALL_RECIPES,
        payload: result
      });
    }
  };

  const setFavouriteRecipes = async () => {
    const result = await getFavouritesRecipes();
    if (result) {
      dispatch({
        type: recipeActions.SET_FAVOURITE_RECIPES,
        payload: result
      });
    }
  };

  useEffect(() => {
    if (isFavouriteRecipesScreen) {
      setFavouriteRecipes();
    } else {
      setAllRecipes();
    }
  }, []);

  const openModal = (): any =>
    dispatch({
      type: modalActions.SHOW_RECIPE_MODAL
    });

  const handleModalOpen = (item: RecipeListItemInterface) => {
    setItemInModal(item);
    openModal();
  };

  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <RecipeListNavbar navigation={navigation} />
      </View>
      <FlatList
        style={styles.itemList}
        data={itemsToGenerate}
        renderItem={(recipe: ListRenderItemInfo<RecipeListItemInterface>): ReactElement => (
          <RecipeListItem item={recipe.item} key={recipe.item.title} onPress={(): void => handleModalOpen(recipe.item)} />
        )}
        keyExtractor={(item: RecipeListItemInterface): string => item.title}
      />
      {itemInModal && <CustomModal item={itemInModal} />}
    </View>
  );
};

export default connect(
  (state: any): any => ({
    modal: state.modal.isModalVisible,
    allRecipes: state.recipe.allRecipes,
    favouriteRecipes: state.recipe.favouriteRecipes
  })
)(AllRecipesScreen);
