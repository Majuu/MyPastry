import React, {FunctionComponent, useState} from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import CustomModal from '../CustomModal';
import CustomText from '../CustomText';
import {ColorsEnum} from '../../enums/colors.enum';
import {FontsEnum} from '../../enums/fonts.enum';
import Timer from '../../../../assets/images/app-interaction-icons/clock.svg';
import InactiveStar from '../../../../assets/images/app-interaction-icons/star-empty.svg';
import ActiveStar from '../../../../assets/images/app-interaction-icons/star-active.svg';
import {RecipeListItemInterface} from '../../interfaces/recipe-item.interface';

interface RecipeListItemProps {
    onPress: () => {};
    item: {
        item: RecipeListItemInterface;
    };
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: ColorsEnum.LIGHT_GREEN,
        alignItems: 'center',
        borderRadius: 10,
        borderColor: ColorsEnum.GREEN,
        borderWidth: 2
    },
    leftMenuWrapper: {
        flexDirection: 'row'
    },
    descriptionWrapper: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'space-between'
    },
    icon: {
        width: 80,
        height: 80,
        marginRight: 20
    },
    timeWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5
    },
    clock: {
        marginRight: 5
    }
});

const RecipeListItem: FunctionComponent<RecipeListItemProps> = ({item, onPress}: RecipeListItemProps): React.ReactElement => {
    const [isStarActive, setIsStarActive] = useState<boolean>(false);
    const titleFontSize = 23;
    const subtitleFontSize = 17;
    const timeSize = 15;
    const {title, category, time, isFavourite} = item.item;

    return (
        <TouchableOpacity
            style={styles.container}
            activeOpacity={0.7}
            onPress={onPress}
        >
            <CustomModal item={item.item} />
            <View style={styles.leftMenuWrapper}>
                <Image
                    source={require('../../../../assets/images/muffin.jpg')}
                    style={styles.icon}
                />
                <View style={styles.descriptionWrapper}>
                    <CustomText
                        color={ColorsEnum.DARK_GREEN}
                        fontSize={titleFontSize}
                        fontFamily={FontsEnum.SEN_BOLD}
                        text={title}
                    />
                    <CustomText
                        color={ColorsEnum.DARK_GREEN}
                        fontSize={subtitleFontSize}
                        fontFamily={FontsEnum.SEN_REGULAR}
                        text={category}
                    />
                    <View style={styles.timeWrapper}>
                        <Timer
                            height={timeSize}
                            width={timeSize}
                            style={styles.clock}
                        />
                        <CustomText
                            text={time}
                            fontSize={timeSize}
                            fontFamily={FontsEnum.SEN_REGULAR}
                            color={ColorsEnum.DARK_GREEN}
                        />
                    </View>
                </View>
            </View>
            {/*move item to favourites va isFavourite prop*/}
            {!isStarActive &&
          <InactiveStar
              height={30}
              width={30}
              onPress={(): void => {
                  setIsStarActive(!isStarActive);
              }}
          />
            }
            {isStarActive &&
          <ActiveStar
              height={30}
              width={30}
              onPress={(): void => {
                  setIsStarActive(!isStarActive);
              }}
          />
            }
        </TouchableOpacity>
    );
};

export default RecipeListItem;
