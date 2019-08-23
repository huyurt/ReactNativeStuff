import React, {useState} from 'react';
import {StyleSheet, View, Button} from 'react-native';

const ColorScreen = () => {
    const [colors, setColors] = useState([]);

    return (
        <View>
            <Button
                title='Renk Ekle'
                onPress={() => {
                    setColors([...colors, randomRGB()])
                }}
            />
            <View style={[styles.color, {backgroundColor: randomRGB()}]}/>
        </View>
    );
};

const randomRGB = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`;
};

const styles = StyleSheet.create({
    color: {
        height: 100,
        width: 100,
        marginVertical: 25
    }
});

export default ColorScreen;
