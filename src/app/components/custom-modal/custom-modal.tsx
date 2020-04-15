import React, {ReactElement} from 'react';
import {Button, Modal, Text, View} from 'react-native';
import {styles} from './custom-modal.styles';

class CustomModal extends Modal {
    public state = {
        isModalVisible: false
    };
    // ToDo implement Redux to handle modal closing and appearing
    public render(): ReactElement {
        return (
            <Modal
                animationType={'fade'}
                visible={this.state.isModalVisible}
                transparent={true}>
                <View style={styles.container}>
                    <Text>Custom Modal works</Text>
                    <Button title={'Modal Off'} onPress={() => this.setState({isModalVisible: false})}/>
                </View>
            </Modal>
        );
    }
}

export default CustomModal;
