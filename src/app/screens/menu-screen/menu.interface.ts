import {ScreensEnum} from '../../enums/screens.enum';

export interface MenuItemListInterface {
    id: string;
    title: string;
    image: HTMLElement;
    screenToNavigate: ScreensEnum;
}

export interface MenuPropsInterface {
    navigation: any;
}
