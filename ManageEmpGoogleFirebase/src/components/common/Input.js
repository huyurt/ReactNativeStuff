import React from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';
import PropTypes from 'prop-types';

const Input = props => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>
                {props.label}
            </Text>
            <TextInput
                style={styles.input}
                secureTextEntry={props.secureTextEntry}
                placeholder={props.placeholder}
                autoCorrect={false}
                value={props.value}
                onChangeText={props.onChangeText}
            />
        </View>
    );
};

Input.propTypes = {
    label: PropTypes.string,
    secureTextEntry: PropTypes.bool,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    onChangeText: PropTypes.func
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 40,
        flexDirection: 'row',
        alignItems: 'center'
    },
    label: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    },
    input: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2
    }
});

export {Input};
