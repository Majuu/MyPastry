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
import {ScreensEnum} from '../../enums/screens.enum';
import {ColorsEnum} from '../../enums/colors.enum';
import {MenuItemListInterface, MenuPropsInterface} from './menu.interface';
import {styles} from './menu.styles';

class MenuScreen extends Component<MenuPropsInterface> {
    // ToDo move item to separate component
    private imgDimensions = 80;
    private data: MenuItemListInterface[] = [
        {
            id: 'learn',
            title: textPlaceholders.menuScreen.learn,
            image: <Learn width={this.imgDimensions} height={this.imgDimensions}/>,
            screenToNavigate: ScreensEnum.RECIPE_LIST
},
        {
            id: 'myList',
            title: textPlaceholders.menuScreen.myList,
            image: <Chef width={this.imgDimensions} height={this.imgDimensions}/>,
            screenToNavigate: ScreensEnum.RECIPE_LIST
},
        {
            id: 'list',
            title: textPlaceholders.menuScreen.list,
            image: <Menu width={this.imgDimensions} height={this.imgDimensions}/>,
            screenToNavigate: ScreensEnum.RECIPE_LIST
        },
        {
            id: 'add',
            title: textPlaceholders.menuScreen.addRecipe,
            image: <Cooking width={this.imgDimensions} height={this.imgDimensions}/>,
            screenToNavigate: ScreensEnum.RECIPE_LIST
        }
    ];

    private item(title: string, image: HTMLElement, screenToNavigate: ScreensEnum): ReactElement {
        const {navigation} = this.props;
        return (
            <TouchableOpacity style={styles.listItem} onPress={(): void => navigation.navigate(screenToNavigate)}>
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
                            renderItem={({item}): ReactElement => this.item(item.title, item.image, item.screenToNavigate)}
                            keyExtractor={(item: MenuItemListInterface): string => item.id}/>

                    </View>
                </View>
            </FullScreenContainer>
        );
    }
}

export default MenuScreen;
