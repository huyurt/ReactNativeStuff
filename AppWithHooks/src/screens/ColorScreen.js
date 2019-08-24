import React, {useState} from 'react';
import {StyleSheet, FlatList, View, Button} from 'react-native';

const ColorScreen = () => {
    const [colors, setColors] = useState([]);

    return (
        <View style={{flex: 1}}>
            <Button
                title='Renk Ekle'
                onPress={() => {
                    setColors([...colors, randomRGB()])
                }}
            />
            <FlatList
                keyExtractor={item => item}
                data={colors}
                renderItem={({item}) => {
                    return (
                        <View style={[styles.color, {backgroundColor: item}]}/>
                    );
                }}
            />
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
        width: 100
    }
});

export default ColorScreen;
