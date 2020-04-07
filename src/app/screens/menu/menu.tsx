import React, {Component, ReactElement, ReactFragment} from 'react';
import {FlatList, View} from 'react-native';
import FullScreenContainer from '../../components/fullscreen-container/fullscreen-container';
import {textPlaceholders} from '../../consts/text-placeholders.const';
import Learn from '../../../../assets/images/mold.svg';
import Menu from '../../../../assets/images/menu.svg';
import Chef from '../../../../assets/images/chef.svg';
import Cooking from '../../../../assets/images/cooking.svg';
import {ScreensEnum} from '../../enums/screens.enum';
import {MenuItemListInterface, MenuPropsInterface} from './menu.interface';
import {styles} from './menu.styles';
import MenuItem from './menu-item/menu-item';

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

    public render(): ReactFragment {
        return (
            <FullScreenContainer>
                <View style={styles.container}>
                    <View>
                        <FlatList
                            data={this.data}
                            renderItem={({item}): ReactElement =>
                                <MenuItem screenToNavigate={item.screenToNavigate} title={item.title} image={item.image} navigation={this.props.navigation}/>
                            }
                            keyExtractor={(item: MenuItemListInterface): string => item.id}/>
                    </View>
                </View>
            </FullScreenContainer>
        );
    }
}

export default MenuScreen;
