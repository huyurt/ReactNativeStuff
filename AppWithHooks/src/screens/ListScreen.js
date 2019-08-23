import React from 'react';
import {StyleSheet, FlatList, View, Text} from 'react-native';

const ListScreen = () => {
    const items = [
        {name: 'Item 1', price: 100},
        {name: 'Item 2', price: 9.99},
        {name: 'Item 3', price: 12},
        {name: 'Item 4', price: 5.5},
        {name: 'Item 5', price: 20},
        {name: 'Item 6', price: 50},
        {name: 'Item 7', price: 23},
        {name: 'Item 8', price: 18},
        {name: 'Item 9', price: 3}
    ];

    return (
        <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={items => items.name}
            data={items}
            renderItem={({item}) => {
                return (
                    <View style={styles.text}>
                        <Text>{item.name} - Price {item.price}</Text>
                    </View>
                );
            }}
        />
    );
};

const styles = StyleSheet.create({
    text: {
        height:50,
        marginHorizontal: 5,
        paddingVertical: 5,
        paddingHorizontal: 5,
        borderWidth: 5,
        justifyContent:'center'
    }
});

export default ListScreen;
