import React, {PureComponent, ReactElement} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import CustomModal from '../../../components/custom-modal/custom-modal';
import CustomText from '../../../components/custom-text/custom-text';
import {ColorsEnum} from '../../../enums/colors.enum';
import {FontsEnum} from '../../../enums/fonts.enum';
import {RecipeListItemPropsInterface} from './recipe-list-item.interface';
import Timer from '../../../../../assets/images/app-interaction-icons/clock.svg';
import InactiveStar from '../../../../../assets/images/app-interaction-icons/star-empty.svg';
import ActiveStar from '../../../../../assets/images/app-interaction-icons/star-active.svg';
import {styles} from './recipe-list-item.styles';

// ToDo Interfaces
class RecipeListItem extends PureComponent<RecipeListItemPropsInterface> {
    private titleFontSize: number = 23;
    private subtitleFontSize: number = 17;
    private timeSize: number = 15;

    public state = {
        isStarActive: false
    };

    public render(): ReactElement {
        const {title, category, time, isFavourite} = this.props.item.item;
        return (
            <TouchableOpacity style={styles.container} activeOpacity={0.7} onPress={this.props.onPress}>
                <CustomModal item={this.props.item.item}/>
                <View style={styles.leftMenuWrapper}>
                    <Image source={require('../../../../../assets/images/muffin.jpg')} style={styles.icon}/>
                    <View style={styles.descriptionWrapper}>
                        <CustomText
                            color={ColorsEnum.DARK_GREEN}
                            fontSize={this.titleFontSize}
                            fontFamily={FontsEnum.SEN_BOLD}
                            text={title}/>
                        <CustomText
                            color={ColorsEnum.DARK_GREEN}
                            fontSize={this.subtitleFontSize}
                            fontFamily={FontsEnum.SEN_REGULAR}
                            text={category}/>
                        <View style={styles.timeWrapper}>
                            <Timer height={this.timeSize} width={this.timeSize} style={styles.clock}/>
                            <CustomText text={time} fontSize={this.timeSize} fontFamily={FontsEnum.SEN_REGULAR} color={ColorsEnum.DARK_GREEN}/>
                        </View>
                    </View>
                </View>
                {/*move item to favourites va isFavourite prop*/}
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
