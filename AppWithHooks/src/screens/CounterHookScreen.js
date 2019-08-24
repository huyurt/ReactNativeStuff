import React, {useState} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

const CounterHookScreen = () => {
    const [counter, setCounter] = useState(0);

    return (
        <View style={styles.container}>
            <View style={styles.button}>
                <Button
                    title='Arttır'
                    onPress={() => setCounter(counter + 1)}
                />
            </View>
            <View style={styles.button}>
                <Button
                    title='Azalt'
                    onPress={() => setCounter(counter - 1)}
                />
            </View>
            <Text>Sayaç: {counter}</Text>
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

export default CounterHookScreen;
