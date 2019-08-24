import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

const ColorCounter = ({colorTitle, textColor, onIncrease, onDecrease}) => {
    return <View style={styles.container}>
        <Text style={{color: textColor}}>{colorTitle}</Text>
        <View style={styles.container}>
            <Button
                title='Arttır'
                onPress={() => onIncrease()}
            />
        </View>
        <View>
            <Button
                title='Azalt'
                onPress={() => onDecrease()}
            />
        </View>
    </View>;
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 10
    }
});

export default ColorCounter;
