import React, {Component} from 'react';
import {View} from 'react-native';
import CustomText from '../../custom-text/custom-text';
import {FontsEnum} from '../../../enums/fonts.enum';
import {ColorsEnum} from '../../../enums/colors.enum';
import {styles} from './custom-modal-recipe-content.styles';

class CustomModalRecipeContent extends Component {
    public render() {
        const  {item, labels} = this.props;
        const ingredientsKeysNames = Object.keys(item.ingredients);
        console.log(this.props);
        return (
            <View style={styles.container}>
                <CustomText text={labels[0]} fontSize={25} fontFamily={FontsEnum.SEN_BOLD} color={ColorsEnum.DARK_GREEN} />
                <View style={styles.sectionWrapper}>
                    <CustomText text={'You will need:'} fontSize={20} fontFamily={FontsEnum.SEN_REGULAR} color={ColorsEnum.DARK_GREEN} style={styles.ingredientsHeader} />
                    {ingredientsKeysNames.map((ingredient: any, key) =>
                        <View key={key} style={styles.ingredientWrapper}>
                            {/*<View><CustomText text={'test'} fontSize={20} fontFamily={FontsEnum.SEN_REGULAR} color={ColorsEnum.DARK_GREEN}/></View>*/}
                            <View><CustomText text={ingredient} fontSize={20} fontFamily={FontsEnum.SEN_REGULAR} color={ColorsEnum.DARK_GREEN}/></View>
                            <View><CustomText text={item.ingredients[ingredient]} fontSize={20} fontFamily={FontsEnum.SEN_REGULAR} color={ColorsEnum.DARK_GREEN}/></View>
                        </View>
                    )}
                </View>

                <View style={styles.sectionWrapper} >
                    <CustomText text={labels[1]} fontSize={25} fontFamily={FontsEnum.SEN_BOLD} color={ColorsEnum.DARK_GREEN} style={styles.ingredientsHeader} />
                    <CustomText text={item.description} fontSize={18} fontFamily={FontsEnum.SEN_REGULAR} color={ColorsEnum.DARK_GREEN} />
                </View>
                <View style={styles.sectionWrapper} >
                    <CustomText text={labels[2]} fontSize={25} fontFamily={FontsEnum.SEN_BOLD} color={ColorsEnum.DARK_GREEN} style={styles.ingredientsHeader} />
                    <CustomText text={item.sumUp} fontSize={18} fontFamily={FontsEnum.SEN_REGULAR} color={ColorsEnum.DARK_GREEN} />

                </View>
                <View style={styles.sectionWrapper} >
                    <CustomText text={labels[3]} fontSize={25} fontFamily={FontsEnum.SEN_BOLD} color={ColorsEnum.DARK_GREEN} style={styles.ingredientsHeader} />
                    <CustomText text={item.authors} fontSize={18} fontFamily={FontsEnum.SEN_REGULAR} color={ColorsEnum.DARK_GREEN} />
                </View>
            </View>
        );
    }
}

export default CustomModalRecipeContent;
