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
                    title='Text Input Hook'
                    onPress={() => navigation.navigate('TextInputHook')}
                />
            </View>
            <View style={styles.button}>
                <Button
                    title='Counter Hook'
                    onPress={() => navigation.navigate('CounterHook')}
                />
            </View>
            <View style={styles.button}>
                <Button
                    title='Counter Reducer Hook'
                    onPress={() => navigation.navigate('CounterReducerHook')}
                />
            </View>
            <View style={styles.button}>
                <Button
                    title='Color Hook'
                    onPress={() => navigation.navigate('ColorHook')}
                />
            </View>
            <View style={styles.button}>
                <Button
                    title='Square Hook Color'
                    onPress={() => navigation.navigate('SquareColorHook')}
                />
            </View>
            <View style={styles.button}>
                <Button
                    title='Square Reducer Hook Color'
                    onPress={() => navigation.navigate('SquareColorReducerHook')}
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
