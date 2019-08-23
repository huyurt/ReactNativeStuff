import React from 'react';
import {StyleSheet, View, Button} from 'react-native';

const HomeScreen = ({navigation}) => {
    return (
        <View>
            <View style={styles.button}>
                <Button
                    title='Flat List'
                    onPress={() => navigation.navigate('FlatList')}
                />
            </View>
            <View style={styles.button}>
                <Button
                    title='Image'
                    onPress={() => navigation.navigate('Image')}
                />
            </View>
            <View style={styles.button}>
                <Button
                    title='Counter'
                    onPress={() => navigation.navigate('Counter')}
                />
            </View>
            <View style={styles.button}>
                <Button
                    title='Color'
                    onPress={() => navigation.navigate('Color')}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        marginVertical: 5
    }
});

export default HomeScreen;
