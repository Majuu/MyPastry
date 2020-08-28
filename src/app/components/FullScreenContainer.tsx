import React, {FunctionComponent, PropsWithChildren, ReactElement} from 'react';
import {StyleSheet, View} from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        display: 'flex'
    }
});

const FullScreenContainer: FunctionComponent<{}> = ({...props}: PropsWithChildren<any>): ReactElement =>
    <View style={styles.container}>
        {props.children}
    </View>;

export default FullScreenContainer;
