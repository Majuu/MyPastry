import React, {PureComponent, ReactElement} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import CustomText from '../../../components/custom-text/custom-text';
import {ColorsEnum} from '../../../enums/colors.enum';
import {FontsEnum} from '../../../enums/fonts.enum';
import Timer from '../../../../../assets/images/app-interaction-icons/clock.svg';
import InactiveStar from '../../../../../assets/images/app-interaction-icons/star-empty.svg';
import ActiveStar from '../../../../../assets/images/app-interaction-icons/star-active.svg';
import {styles} from './recipe-list-item.styles';

// ToDo Interfaces
class RecipeListItem extends PureComponent {
    private titleFontSize: number = 23;
    private subtitleFontSize: number = 17;
    private timeSize: number = 15;

    public state = {
        isStarActive: false
    };

    public render(): ReactElement {
        return (
            <TouchableOpacity style={styles.container} activeOpacity={0.7}>
                <View style={styles.leftMenuWrapper}>
                    <Image source={require('../../../../../assets/images/muffin.jpg')} style={styles.icon}/>
                    <View style={styles.descriptionWrapper}>
                        <CustomText
                            color={ColorsEnum.MARBLE}
                            fontSize={this.titleFontSize}
                            fontFamily={FontsEnum.SEN_BOLD}
                            text={'Title'}/>
                        <CustomText
                            color={ColorsEnum.MARBLE}
                            fontSize={this.subtitleFontSize}
                            fontFamily={FontsEnum.SEN_REGULAR}
                            text={'Category'}/>
                        <View style={styles.timeWrapper}>
                            <Timer height={this.timeSize} width={this.timeSize} style={styles.clock}/>
                            <CustomText text={'00:15:00'} fontSize={this.timeSize} fontFamily={FontsEnum.SEN_REGULAR} color={ColorsEnum.MARBLE}/>
                        </View>
                    </View>
                </View>
                {!this.state.isStarActive && <InactiveStar height={30} width={30} onPress={(): void => {
                    this.setState({isStarActive: !this.state.isStarActive});
                }} />}
                {this.state.isStarActive && <ActiveStar height={30} width={30} onPress={(): void => {
                    this.setState({isStarActive: !this.state.isStarActive});
                }} />}
            </TouchableOpacity>
        );
    }
}

export default RecipeListItem;
