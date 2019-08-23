import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';

const ImageDetail = ({imageSource, title, score}) => {
    return (
        <View>
            <Image source={imageSource}/>
            <Text>{title}</Text>
            <Text>Resim Skoru - {score}</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default ImageDetail;
