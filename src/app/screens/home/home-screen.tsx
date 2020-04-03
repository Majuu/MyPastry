import React, {Component, ReactElement} from 'react';
import {View} from 'react-native';
import CustomButton from '../../components/custom-button/custom-button';
import CustomText from '../../components/custom-text/custom-text';
import {FontsEnum} from '../../enums/fonts.enum';
import {ColorsEnum} from '../../enums/colors.enum';
import {ScreensEnum} from '../../enums/screens.enum';
import Cake from '../../../../assets/images/pie.svg';
import {HomeScreenPropsInterface} from './home-screen.interface';
import {styles} from './home-screen.styles';

class HomeScreen extends Component<HomeScreenPropsInterface> {
    public render(): ReactElement {
        const {navigation} = this.props;
        return (
            <View style={styles.container}>
                <CustomText style={styles.header} text={'Welcome to MyPastry'} fontFamily={FontsEnum.SEN_BOLD} fontSize={35} color={ColorsEnum.DARK_GREEN}/>
                <CustomText style={styles.subheader} text={'A place where you keep your favourite recipes in one place and learn how to bake'} fontFamily={FontsEnum.SEN_REGULAR} fontSize={20} color={ColorsEnum.DARK_GREEN}/>
                <View style={styles.cakeImage}>
                    <Cake width={'100%'} height={'100%'}/>
                </View>
                <CustomButton style={styles.button} text={'Let\'s get started!'} onPress={(): void => navigation.navigate(ScreensEnum.MENU)}/>
            </View>
        );
    }
}

export default HomeScreen;
