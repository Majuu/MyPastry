import {StyleSheet} from 'react-native';
import {ColorsEnum} from '../../enums/colors.enum';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: ColorsEnum.LIGHT_GREEN
    },
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
