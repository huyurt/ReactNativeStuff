import React from "react";
import {StyleSheet, ActivityIndicator, Text, View} from 'react-native';

interface IProps {
    content?: string;
}

const LoadingIndicator: React.FC<IProps> = ({content}) => {
    return (
        <View style={styles.container}>
            <ActivityIndicator
                animating={true}
                color='red'
                size={50}
            >
            </ActivityIndicator>
            {typeof content !== undefined ? <Text>{content}</Text> : ''}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default LoadingIndicator;