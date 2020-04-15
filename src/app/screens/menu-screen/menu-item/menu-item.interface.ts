import {ScreensEnum} from '../../../enums/screens.enum';
import {Image} from 'react-native';

export interface MenuItemPropsInterface {
    navigation: any;
    screenToNavigate: ScreensEnum;
    title: string;
    image: Image;
}
