import React, {Component, ReactFragment} from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import CustomText from '../../components/custom-text/custom-text';
import {ColorsEnum} from '../../enums/colors.enum';
import {FontsEnum} from '../../enums/fonts.enum';
import {styles} from './recipe-list.styles';
import InactiveStar from '../../../../assets/images/app-interaction-icons/star-empty.svg';
import Timer from '../../../../assets/images/app-interaction-icons/clock.svg';

class RecipeListScreen extends Component {
    private favouriteTrigger: boolean = false;

    public render(): ReactFragment {
        return (
            <View style={styles.container}>
                <View style={styles.navbar}>
                    <Text>Recipe List Screen Works!</Text>
                </View>
                <ScrollView style={styles.itemList}>
                    <View style={{marginTop: 30, padding: 20, height: 'auto', width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', backgroundColor: ColorsEnum.DARK_GREEN, alignItems: 'center'}}>
                        <View style={{display: 'flex', flexDirection: 'row'}}>
                            <Image source={require('../../../../assets/images/muffin.jpg')} style={{width: 80, height: 80, marginRight: 20}}/>
                            <View style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'space-between'}}>
                                <CustomText
                                    color={ColorsEnum.MARBLE}
                                    fontSize={22}
                                    fontFamily={FontsEnum.SEN_BOLD}
                                    text={'Title'}/>
                                <CustomText
                                    color={ColorsEnum.MARBLE}
                                    fontSize={18}
                                    fontFamily={FontsEnum.SEN_REGULAR}
                                    text={'Category'}/>
                                <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
                                    <Timer height={15} width={15} style={{marginRight: 5}}/>
                                    <CustomText text={'00:15:00'} fontSize={15} fontFamily={FontsEnum.SEN_REGULAR} color={ColorsEnum.MARBLE}/>
                                </View>
                            </View>
                        </View>
                        <View style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-end'}}>
                            <InactiveStar height={30} width={30}/>
                        </View>
                        {/*<ActiveStar height={30} width={30}/>*/}
                    </View>
                </ScrollView>
            </View>
        );
    }
}

export default RecipeListScreen;
