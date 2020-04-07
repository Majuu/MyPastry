import {StyleSheet} from 'react-native';
import {ColorsEnum} from '../../../enums/colors.enum';

export const styles = StyleSheet.create({
    listItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1,
        borderRadius: 10,
        backgroundColor: ColorsEnum.GREEN,
        margin: 10,
        padding: 20
    }
});
