import {StyleSheet} from 'react-native';
import {ColorsEnum} from '../../../enums/colors.enum';

export const styles = StyleSheet.create({
    container: {
        marginBottom: 4,
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: ColorsEnum.DARK_GREEN,
        alignItems: 'center',
        borderRadius: 5
    },
    leftMenuWrapper: {
        flexDirection: 'row'
    },
    descriptionWrapper: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'space-between'
    },
    icon: {
        width: 80,
        height: 80,
        marginRight: 20
    },
    timeWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5
    },
    clock: {
        marginRight: 5
    }
});
