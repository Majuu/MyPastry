import React, {ReactElement} from 'react';
import {Modal, ScrollView, View} from 'react-native';
import {connect} from 'react-redux';
import CustomModalRecipeContent from './custom-modal-recipe-content/custom-modal-recipe-content';
import {modalActions} from '../../store/actions/modal.actions';
import StepIndicator from 'react-native-step-indicator';
import CustomText from '../custom-text/custom-text';
import CloseButton from '../../../../assets/images/close.svg';
import {FontsEnum} from '../../enums/fonts.enum';
import {ColorsEnum} from '../../enums/colors.enum';
import {CustomModalReduxStateInterface} from './custom-modal.interface';
import {styles} from './custom-modal.styles';

// ToDo props interface
class CustomModal extends Modal {
    public state = {
        currentPosition: 1
    }
    private closeModal = () => this.props.dispatch({
        type: modalActions.HIDE_RECIPE_MODAL
    })

    public render(): ReactElement {
        const {item, modal} = this.props;
        const labels = ['Checklist','Cook!','To sum up', 'Authors'];
        return (
            <Modal
                animationType={'fade'}
                visible={modal}
                transparent={true}>
                <View style={styles.container}>
                    <CloseButton width={20} height={20} style={styles.closeButton} onPress={this.closeModal}/>
                    <View style={styles.header}>
                        <CustomText text={item.title} fontSize={40} fontFamily={FontsEnum.SEN_EXTRABOLD} color={ColorsEnum.DARK_GREEN} />
                    </View>
                    <View style={styles.wrapper}>
                        <View style={styles.stepIndicator}>
                            <StepIndicator
                                labels={labels}
                                direction={'vertical'}
                                currentPosition={this.state.currentPosition}
                                stepCount={4}
                                customStyles={{
                                    stepIndicatorSize: 40,
                                    currentStepIndicatorSize: 40,
                                    separatorStrokeWidth: 4,
                                    currentStepStrokeWidth: 4,
                                    stepStrokeCurrentColor: ColorsEnum.GREEN,
                                    stepStrokeWidth: 4,
                                    stepStrokeFinishedColor: ColorsEnum.GREEN,
                                    stepStrokeUnFinishedColor: ColorsEnum.GRAY,
                                    separatorFinishedColor: ColorsEnum.GREEN,
                                    separatorUnFinishedColor: ColorsEnum.GRAY,
                                    stepIndicatorFinishedColor: ColorsEnum.GREEN,
                                    stepIndicatorUnFinishedColor: ColorsEnum.WHITE,
                                    stepIndicatorCurrentColor: ColorsEnum.WHITE,
                                    stepIndicatorLabelFontSize: 22,
                                    currentStepIndicatorLabelFontSize: 22,
                                    stepIndicatorLabelCurrentColor: ColorsEnum.GREEN,
                                    stepIndicatorLabelFinishedColor: ColorsEnum.WHITE,
                                    stepIndicatorLabelUnFinishedColor: ColorsEnum.GRAY,
                                    labelColor: '#999999',
                                    labelSize: 15,
                                    currentStepLabelColor: ColorsEnum.DARK_GREEN,
                                    labelAlign: 'flex-start'
                                }}/>
                        </View>
                        <ScrollView style={styles.recipeContent}>
                            <CustomModalRecipeContent item={item} labels={labels}/>
                        </ScrollView>
                    </View>
                </View>

            </Modal>
        );
    }
}

export default connect((state: CustomModalReduxStateInterface) => ({
    modal: state.modal.isModalVisible
}))(CustomModal);
