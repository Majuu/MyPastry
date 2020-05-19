import React, {ReactElement} from 'react';
import {Button, Modal, Text, View} from 'react-native';
import {connect} from 'react-redux';
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
    private closeModal = () => this.props.dispatch({
        type: modalActions.HIDE_RECIPE_MODAL
    })

    public render(): ReactElement {
        const labels = ['Ingredients','Preparation desk','Baking instructions','Summary'];

        return (
            <Modal
                animationType={'fade'}
                visible={this.props.modal}
                transparent={true}>

                <View style={styles.container}>
                    <CloseButton width={20} height={20} style={{position: 'absolute', top: 15, right: 15}} onPress={this.closeModal}/>
                    <View style={styles.header}>
                        <CustomText text={'PASTRY ITEM TITLE'} fontSize={40} fontFamily={FontsEnum.SEN_EXTRABOLD} color={ColorsEnum.DARK_GREEN} />
                    </View>
                    <View style={styles.content}>
                        <StepIndicator labels={labels} direction={'vertical'}/>
                        <View>
                            <Text>Custom Modal works</Text>
                        </View>
                    </View>
                </View>

            </Modal>
        );
    }
}

export default connect((state: CustomModalReduxStateInterface) => ({
    modal: state.modal.isModalVisible
}))(CustomModal);
