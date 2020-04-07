import {ScreensEnum} from '../../../enums/screens.enum';

export interface MenuItemPropsInterface {
    navigation: any;
    screenToNavigate: ScreensEnum;
    title: string;
    image: any;
}
