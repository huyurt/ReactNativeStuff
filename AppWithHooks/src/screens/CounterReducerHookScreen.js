import React, {useReducer} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

const reducer = (state, action) => {
    switch (action.type) {
        case 'increase':
            return {...state, sayac: state.sayac + action.payload};
        case 'decrease':
            return {...state, sayac: state.sayac - action.payload};
        default:
            return state;
    }
};

const CounterReducerHookScreen = () => {
    const [state, dispatch] = useReducer(reducer, {sayac: 0});

    return (
        <View style={styles.container}>
            <View style={styles.button}>
                <Button
                    title='Arttır'
                    onPress={() => dispatch({type: 'increase', payload: 1})}
                />
            </View>
            <View style={styles.button}>
                <Button
                    title='Azalt'
                    onPress={() => dispatch({type: 'decrease', payload: 1})}
                />
            </View>
            <Text>Sayaç: {state.sayac}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        width: 100,
        marginVertical: 10
    }
});

export default CounterReducerHookScreen;
