import {StyleSheet} from 'react-native';
import {ColorsEnum} from '../../enums/colors.enum';

export const styles = StyleSheet.create({
    container: {
        width: 'auto',
        height: 50,
        backgroundColor: ColorsEnum.GREEN,
        borderRadius: 5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 20,
        paddingRight: 20
    }
});
