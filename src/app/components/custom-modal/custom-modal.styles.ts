import {StyleSheet} from 'react-native';
import {ColorsEnum} from '../../enums/colors.enum';

export const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        backgroundColor: ColorsEnum.LIGHT_GREEN
    },
    header: {
        marginTop: 40,
        marginBottom: 20

    },
    content: {
        display: 'flex',
        flexDirection: 'row',
        flex: 1
    }
});
