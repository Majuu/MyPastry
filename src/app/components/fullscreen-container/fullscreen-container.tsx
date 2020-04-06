import React, {PropsWithChildren, ReactElement} from 'react';
import {View} from 'react-native';
import {styles} from './fullscreen-container.styles';

const FullScreenContainer = (props: PropsWithChildren<ReactElement>): ReactElement =>
    <View style={styles.container}>
        {props.children}
    </View>;

export default FullScreenContainer;
