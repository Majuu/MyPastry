import {FontsEnum} from '../../enums/fonts.enum';
import {ColorsEnum} from '../../enums/colors.enum';

export interface CustomTextPropsInterface {
    text: string;
    fontSize: any;
    fontFamily: FontsEnum;
    color: ColorsEnum;
    style?: HTMLStyleElement;
}
