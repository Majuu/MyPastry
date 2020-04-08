import React, {PureComponent, ReactElement} from 'react';
import {View} from 'react-native';
import {Picker} from '@react-native-community/picker';
import {styles} from './custom-picker.styles';

// ToDo add props - generic item
class CustomPicker extends PureComponent {
    public state = {
        chosenCategory: 'all'
    };

    public render(): ReactElement {
        return (
            <View style={styles.container}>
                <Picker
                    selectedValue={this.state.chosenCategory}
                    onValueChange={(itemValue: number| string): void => this.setState({chosenCategory: itemValue})}
                    style={styles.picker}
                    mode={'dialog'}>
                    <Picker.Item label={'All'} value={'all'} />
                    <Picker.Item label={'Cakes'} value={'cakes'} />
                    <Picker.Item label={'Muffins'} value={'muffins'} />
                    <Picker.Item label={'Cookies'} value={'cookies'} />
                </Picker>
            </View>
        );
    }
}

export default CustomPicker;
