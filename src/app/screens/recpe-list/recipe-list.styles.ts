import {StyleSheet} from 'react-native';
import {ColorsEnum} from '../../enums/colors.enum';

export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column'
    },
    navbar: {
        height: 100,
        width: 'auto',
        backgroundColor: ColorsEnum.LIGHT_GREEN,
        borderBottomColor: ColorsEnum.DARK_GREEN,
        borderBottomWidth: 2
    },
    itemList: {
        backgroundColor: ColorsEnum.MARBLE,
        display: 'flex',
        flexDirection: 'column'
    }
});
