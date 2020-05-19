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
        marginTop: 60,
        marginBottom: 30

    },
    wrapper: {
        display: 'flex',
        flexDirection: 'row',
        flex: 1
    },
    closeButton: {
        position: 'absolute',
        top: 20,
        right: 20
    },
    stepIndicator: {
        width: 'auto',
        borderRightWidth: 1,
        borderStyle: 'solid',
        borderColor: ColorsEnum.DARK_GREEN,
        marginRight: 6,
        paddingRight: 3,
        marginLeft: 6
    },
    recipeContent: {
        flex: 1
    }
});
