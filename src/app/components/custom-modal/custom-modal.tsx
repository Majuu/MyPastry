import React, {ReactElement} from 'react';
import {Button, Modal, Text, View} from 'react-native';
import {connect} from 'react-redux';
import {modalActions} from '../../store/actions/modal.actions';
import {CustomModalReduxStateInterface} from './custom-modal.interface';
import {styles} from './custom-modal.styles';

// ToDo props interface
class CustomModal extends Modal {
    private closeModal = () => this.props.dispatch({
        type: modalActions.HIDE_RECIPE_MODAL
    })

    public render(): ReactElement {
        return (
            <Modal
                animationType={'fade'}
                visible={this.props.modal}
                transparent={true}>
                <View style={styles.container}>
                    <Text>Custom Modal works</Text>
                    <Button title={'Modal Off'} onPress={this.closeModal}/>
                </View>
            </Modal>
        );
    }
}

export default connect((state: CustomModalReduxStateInterface) => ({
    modal: state.modal.isModalVisible
}))(CustomModal);
