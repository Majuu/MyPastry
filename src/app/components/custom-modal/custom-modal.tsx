import React, {ReactElement} from 'react';
import {Button, Modal, Text, View} from 'react-native';
import {styles} from './custom-modal.styles';
import {connect} from 'react-redux';
import {CustomModalPropsInterface, CustomModalReduxStateInterface} from './custom-modal.interface';
import {HIDE_RECIPE_MODAL} from "../../store/actions/modal.actions";

class CustomModal extends Modal {
    public state = {
        isModalVisible: false
    };
    // ToDo implement Redux to handle modal closing and appearing
    public render(): ReactElement {
        console.log('moal props: ', this.props);
        return (
            <Modal
                animationType={'fade'}
                // visible={this.props.isModalVisible}
                visible={this.props.modal}
                transparent={true}>
                <View style={styles.container}>
                    <Text>Custom Modal works</Text>
                    <Button title={'Modal Off'} onPress={() => this.props.dispatch({
                        type: HIDE_RECIPE_MODAL
                    })} />
                </View>
            </Modal>
        );
    }
}

export default connect((state: CustomModalReduxStateInterface) => ({
    modal: state.modal.isModalVisible
}))(CustomModal);
