import React, {PureComponent, ReactElement} from 'react';
import {View} from 'react-native';
import {Picker} from '@react-native-community/picker';
import {styles} from './custom-picker.styles';

// ToDo add props - generic item
class CustomPicker extends PureComponent {
    private pickerItems = [
        {label: 'All', value: 'all'},
        {label: 'Cookies', value: 'cookies'},
        {label: 'Muffins', value: 'muffins'},
        {label: 'Cakes', value: 'cakes'}
    ]

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
                    {this.pickerItems.map(item =>
                        <Picker.Item key={item.value} label={item.label} value={item.value} />
                    )}
                </Picker>
            </View>
        );
    }
}

export default CustomPicker;
