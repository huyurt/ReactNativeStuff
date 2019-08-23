import React from 'react';
import {StyleSheet, View} from 'react-native';
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
    return (
        <View>
            <ImageDetail
                title='Orman'
                imageSource={require('../../assets/image/forest.jpg')}
                score={9}
            />
            <ImageDetail
                title='Kumsal'
                imageSource={require('../../assets/image/beach.jpg')}
                score={7}
            />
            <ImageDetail
                title='Dağ'
                imageSource={require('../../assets/image/mountain.jpg')}
                score={9}
            />
        </View>
    );
};

const styles = StyleSheet.create({});

export default ImageScreen;
