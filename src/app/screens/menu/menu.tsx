import React, {Component, ReactFragment} from 'react';
import {FlatList, TouchableOpacity, View} from 'react-native';
import FullScreenContainer from '../../components/fullscreen-container/fullscreen-container';
import CustomText from '../../components/custom-text/custom-text';
import Learn from '../../../../assets/images/cream-pusher.svg';
import Menu from '../../../../assets/images/menu.svg';
import Chef from '../../../../assets/images/chef.svg';
import Cooking from '../../../../assets/images/cooking.svg';
import {FontsEnum} from '../../enums/fonts.enum';
import {ColorsEnum} from '../../enums/colors.enum';
import {styles} from './menu.styles';

class MenuScreen extends Component {
    private data = [
        {
            id: 'learn',
            title: 'Learn the basics',
            image: <Learn width={80} height={80}/>
        },
        {
            id: 'myList',
            title: 'My recipe list',
            image: <Chef width={80} height={80}/>
        },
        {
            id: 'list',
            title: 'All recipes',
            image: <Menu width={80} height={80}/>
        },
        {
            id: 'add',
            title: 'Add a recipe',
            image: <Cooking width={80} height={80}/>
        }
    ];

    public item(title, image) {
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
                            renderItem={({item}) => this.item(item.title, item.image)}
                            keyExtractor={item => item.id}/>

                    </View>
                </View>
            </FullScreenContainer>
        );
    }
}

export default MenuScreen;
