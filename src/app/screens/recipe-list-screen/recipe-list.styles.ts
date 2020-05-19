import {StyleSheet} from 'react-native';
import {ColorsEnum} from '../../enums/colors.enum';

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    navbar: {
        flex: 0.22,
        backgroundColor: ColorsEnum.GREEN
    },
    itemList: {
        backgroundColor: ColorsEnum.GREEN,
        display: 'flex',
        flexDirection: 'column',
        flex: 30,
        paddingTop: 2
    }
});
