import {StyleSheet} from 'react-native';
import {ColorsEnum} from '../../enums/colors.enum';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: ColorsEnum.LIGHT_GREEN,
        height: '100%',
        width: '100%',
        display: 'flex',
        alignItems: 'center'
    },
    header: {
        marginTop: 40
    },
    subheader: {
        margin: 30
    },
    button: {
        position: 'absolute',
        bottom: 0,
        marginBottom: 60
    },
    cakeImage: {
        width: 230,
        height: 230,
        marginTop: 35
    }
});
