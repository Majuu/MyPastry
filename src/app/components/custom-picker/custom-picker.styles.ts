import {StyleSheet} from 'react-native';
import {ColorsEnum} from '../../enums/colors.enum';

export const styles = StyleSheet.create({
    container: {
        borderWidth: 3,
        borderColor: ColorsEnum.GREEN,
        borderRadius: 5
    },
    picker: {
        color: ColorsEnum.DARK_GREEN,
        width: 'auto',
        height: '100%'
    }
});
