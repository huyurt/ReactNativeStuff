import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

const TrackListScreen = ({navigation}) => {
    return <>
        <Text>TrackListScreen Screen</Text>
        <Button
            title='Track Detayı'
            onPress={() => navigation.navigate('TrackDetail')}
        />
    </>;
};

const styles = StyleSheet.create({});

export default TrackListScreen;
