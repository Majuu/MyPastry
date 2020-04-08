import {StyleSheet} from 'react-native';
import {ColorsEnum} from '../../enums/colors.enum';

export const styles = StyleSheet.create({
    container: {
        borderWidth: 3,
        borderColor: ColorsEnum.MARBLE,
        borderRadius: 5
    },
    picker: {
        color: ColorsEnum.MARBLE,
        width: 'auto',
        height: '100%'
    }
});
