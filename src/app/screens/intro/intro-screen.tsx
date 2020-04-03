import React, {Component, ReactElement} from 'react';
import {View} from 'react-native';
import CustomButton from '../../components/custom-button/custom-button';
import CustomText from '../../components/custom-text/custom-text';
import {textPlaceholders} from '../../consts/text-placeholders.const';
import {FontsEnum} from '../../enums/fonts.enum';
import {ColorsEnum} from '../../enums/colors.enum';
import {ScreensEnum} from '../../enums/screens.enum';
import Cake from '../../../../assets/images/pie.svg';
import {IntroScreenPropsInterface} from './intro-screen.interface';
import {styles} from './intro-screen.styles';
import FullScreenContainer from '../../components/fullscreen-container/fullscreen-container';

class IntroScreen extends Component<IntroScreenPropsInterface> {
    public render(): ReactElement {
        const {navigation} = this.props;
        return (
            <FullScreenContainer>
                <View style={styles.container}>
                    <CustomText style={styles.header} text={textPlaceholders.introScreen.welcomeToMyPastry} fontFamily={FontsEnum.SEN_BOLD} fontSize={35} color={ColorsEnum.DARK_GREEN}/>
                    <CustomText style={styles.subheader} text={textPlaceholders.introScreen.subtitle} fontFamily={FontsEnum.SEN_REGULAR} fontSize={20} color={ColorsEnum.DARK_GREEN}/>
                    <Cake width={240} height={240} style={styles.cakeImage}/>
                    <CustomButton style={styles.button} text={textPlaceholders.introScreen.letsStart} onPress={(): void => navigation.navigate(ScreensEnum.MENU)}/>
                </View>
            </FullScreenContainer>
        );
    }
}

export default IntroScreen;
