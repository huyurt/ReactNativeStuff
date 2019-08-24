import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 5;

const SquareHookScreen = () => {
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    const setColor = (color, changeValue) => {
        switch (color) {
            case 'red':
                if (!(red + changeValue > 255 || red + changeValue < 0))
                    setRed(red + changeValue);
                return;
            case 'green':
                if (!(green + changeValue > 255 || green + changeValue < 0))
                    setGreen(green + changeValue);
                return;
            case 'blue':
                if (!(blue + changeValue > 255 || blue + changeValue < 0))
                    setBlue(blue + changeValue);
                return;
        }
    };

    return (
        <View>
            <ColorCounter
                textColor='red'
                colorTitle='Kırmızı'
                onIncrease={() => setColor('red', COLOR_INCREMENT)}
                onDecrease={() => setColor('red', -COLOR_INCREMENT)}
            />
            <ColorCounter
                textColor='green'
                colorTitle='Yeşil'
                onIncrease={() => setColor('green', COLOR_INCREMENT)}
                onDecrease={() => setColor('green', -COLOR_INCREMENT)}
            />
            <ColorCounter
                textColor='blue'
                colorTitle='Mavi'
                onIncrease={() => setColor('blue', COLOR_INCREMENT)}
                onDecrease={() => setColor('blue', -COLOR_INCREMENT)}
            />
            <View
                style={{
                    height: 150,
                    width: '100%',
                    backgroundColor: `rgb(${red}, ${green}, ${blue})`
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({});

export default SquareHookScreen;
