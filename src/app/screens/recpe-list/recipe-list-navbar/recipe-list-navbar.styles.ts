import {StyleSheet} from 'react-native';
import {ColorsEnum} from '../../../enums/colors.enum';

export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        flex: 1,
        backgroundColor: ColorsEnum.DARK_GREEN,
        borderBottomColor: ColorsEnum.MARBLE,
        borderBottomWidth: 2
    },
    picker: {
        width: '50%'
    },
    contentWrapper: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        flex: 1,
        padding: 8,
        marginTop: 3
    },
    header: {
        marginTop: 15
    }
});
