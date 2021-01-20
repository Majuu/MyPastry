import React, { FunctionComponent, ReactElement, useEffect, useState } from 'react';
import { FlatList, ListRenderItemInfo, Route, StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import { modalActions } from '../store/actions/modal.actions';
import { Dispatch } from 'redux';
import { RecipeListItemInterface } from '../interfaces/recipe.interface';
import { ColorsEnum } from '../enums/colors.enum';
import RecipeListItem from '../components/RecipesList/RecipeListItem';
import RecipeListNavbar from '../components/RecipesList/RecipeListNavbar';
import CustomModal from '../components/shared/CustomModal';
import { getAllRecipes } from '../services/dataApi';
import { recipeActions } from '../store/actions/recipe.actions';

interface AllRecipesScreenProps {
  modal: boolean;
  dispatch: Dispatch;
  navigation: Route;
  //later
  recipeList: {
    allRecipes: RecipeListItemInterface[];
  };
  recipeList2?: any;
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
  recipeList,
  navigation
}: AllRecipesScreenProps): React.ReactElement => {
  const [itemInModal, setItemInModal] = useState<any>(null);

  useEffect(() => {
    const setAllRecipes = async () => {
      const result = await getAllRecipes();
      if (result) {
        dispatch({
          type: recipeActions.SET_ALL_RECIPES,
          payload: result
        });
      }
    };

    setAllRecipes();
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
        data={recipeList.allRecipes}
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
    recipeList: state.recipe
  })
)(AllRecipesScreen);
