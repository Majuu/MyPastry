import React, { FunctionComponent } from 'react';
import { StyleSheet, View } from 'react-native';
import CustomText from './shared/CustomText';
import { FontsEnum } from '../enums/fonts.enum';
import { ColorsEnum } from '../enums/colors.enum';

interface RecipeContentProps {
  item: any;
  labels: any[];
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 'auto',
    paddingLeft: 6,
    paddingRight: 6
  },
  sectionWrapper: {
    marginTop: 20,
    marginBottom: 20
  },
  ingredientsHeader: {
    marginBottom: 20
  },
  ingredientWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

const RecipeContent: FunctionComponent<RecipeContentProps> = ({ item, labels }: RecipeContentProps): React.ReactElement => {
  const ingredientsKeysNames = Object.keys(item.ingredients);
  return (
    <View style={styles.container}>
      <CustomText text={labels[0]} fontSize={25} fontFamily={FontsEnum.SEN_BOLD} color={ColorsEnum.DARK_GREEN} />
      <View style={styles.sectionWrapper}>
        <CustomText
          text={'You will need:'}
          fontSize={20}
          fontFamily={FontsEnum.SEN_REGULAR}
          color={ColorsEnum.DARK_GREEN}
          style={styles.ingredientsHeader}
        />
        {ingredientsKeysNames.map((ingredient: any, key) => (
          <View key={key} style={styles.ingredientWrapper}>
            {/*<View><CustomText text={'test'} fontSize={20} fontFamily={FontsEnum.SEN_REGULAR} color={ColorsEnum.DARK_GREEN}/></View>*/}
            <View>
              <CustomText text={ingredient} fontSize={20} fontFamily={FontsEnum.SEN_REGULAR} color={ColorsEnum.DARK_GREEN} />
            </View>
            <View>
              <CustomText
                text={item.ingredients[ingredient]}
                fontSize={20}
                fontFamily={FontsEnum.SEN_REGULAR}
                color={ColorsEnum.DARK_GREEN}
              />
            </View>
          </View>
        ))}
      </View>

      <View style={styles.sectionWrapper}>
        <CustomText
          text={labels[1]}
          fontSize={25}
          fontFamily={FontsEnum.SEN_BOLD}
          color={ColorsEnum.DARK_GREEN}
          style={styles.ingredientsHeader}
        />
        <CustomText text={item.description} fontSize={18} fontFamily={FontsEnum.SEN_REGULAR} color={ColorsEnum.DARK_GREEN} />
      </View>
      <View style={styles.sectionWrapper}>
        <CustomText
          text={labels[2]}
          fontSize={25}
          fontFamily={FontsEnum.SEN_BOLD}
          color={ColorsEnum.DARK_GREEN}
          style={styles.ingredientsHeader}
        />
        <CustomText text={item.sumUp} fontSize={18} fontFamily={FontsEnum.SEN_REGULAR} color={ColorsEnum.DARK_GREEN} />
      </View>
      <View style={styles.sectionWrapper}>
        <CustomText
          text={labels[3]}
          fontSize={25}
          fontFamily={FontsEnum.SEN_BOLD}
          color={ColorsEnum.DARK_GREEN}
          style={styles.ingredientsHeader}
        />
        <CustomText text={item.authors} fontSize={18} fontFamily={FontsEnum.SEN_REGULAR} color={ColorsEnum.DARK_GREEN} />
      </View>
    </View>
  );
};

export default RecipeContent;
