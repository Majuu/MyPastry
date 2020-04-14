import React, {ReactElement} from 'react';
import {Button, Modal, Text, View} from 'react-native';

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
                <View style={{position: 'absolute', top: 0, right: 0, left: 0, bottom: 0, backgroundColor: 'salmon'}}>
                    <Text>Dupaaaaaaa</Text>
                    <Button title={'Modal Off'} onPress={() => this.setState({isModalVisible: false})}/>
                </View>
            </Modal>
        );
    }
}

export default CustomModal;
