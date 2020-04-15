import React, {ReactElement} from 'react';
import {View} from 'react-native';
import {styles} from './fullscreen-container.styles';

// ToDo: fix types

const FullScreenContainer = (props: any): ReactElement =>
    <View style={styles.container}>
        {props.children}
    </View>;

export default FullScreenContainer;
