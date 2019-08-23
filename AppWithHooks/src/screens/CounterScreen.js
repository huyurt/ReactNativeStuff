import React, {useState} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

const CounterScreen = () => {
    const [counter, setCounter] = useState(0);

    return (
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
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
    button: {
        width: 100,
        marginVertical: 10
    }
});

export default CounterScreen;
