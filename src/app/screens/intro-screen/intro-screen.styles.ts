import {StyleSheet} from 'react-native';
import {ColorsEnum} from '../../enums/colors.enum';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: ColorsEnum.LIGHT_GREEN,
        flex: 1,
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
        marginTop: 20
    }
});
