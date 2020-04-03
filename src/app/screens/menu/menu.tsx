import React, {Component, ReactElement, ReactFragment} from 'react';
import {FlatList, TouchableOpacity, View} from 'react-native';
import FullScreenContainer from '../../components/fullscreen-container/fullscreen-container';
import CustomText from '../../components/custom-text/custom-text';
import {textPlaceholders} from '../../consts/text-placeholders.const';
import Learn from '../../../../assets/images/cream-pusher.svg';
import Menu from '../../../../assets/images/menu.svg';
import Chef from '../../../../assets/images/chef.svg';
import Cooking from '../../../../assets/images/cooking.svg';
import {FontsEnum} from '../../enums/fonts.enum';
import {ColorsEnum} from '../../enums/colors.enum';
import {MenuItemListInterface} from './menu.interface';
import {styles} from './menu.styles';

class MenuScreen extends Component {
    private data: MenuItemListInterface[] = [
        {
            id: 'learn',
            title: textPlaceholders.menuScreen.learn,
            image: <Learn width={80} height={80}/>
        },
        {
            id: 'myList',
            title: textPlaceholders.menuScreen.myList,
            image: <Chef width={80} height={80}/>
        },
        {
            id: 'list',
            title: textPlaceholders.menuScreen.list,
            image: <Menu width={80} height={80}/>
        },
        {
            id: 'add',
            title: textPlaceholders.menuScreen.addRecipe,
            image: <Cooking width={80} height={80}/>
        }
    ];

    private static item(title: string, image: HTMLElement): ReactElement {
        return (
            <TouchableOpacity style={styles.listItem}>
                <CustomText text={title} fontSize={30} fontFamily={FontsEnum.SEN_BOLD} color={ColorsEnum.DARK_GREEN}/>
                {image}
            </TouchableOpacity>
        );
    }

    public render(): ReactFragment {
        return (
            <FullScreenContainer>
                <View style={styles.container}>
                    <View>
                        <FlatList
                            data={this.data}
                            renderItem={({item}): ReactElement => MenuScreen.item(item.title, item.image)}
                            keyExtractor={(item: MenuItemListInterface): string => item.id}/>

                    </View>
                </View>
            </FullScreenContainer>
        );
    }
}

export default MenuScreen;
