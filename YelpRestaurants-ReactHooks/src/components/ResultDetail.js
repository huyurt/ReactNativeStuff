import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

const ResultDetail = ({result}) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: result.image_url}}/>
            <Text style={styles.name}>{result.name}</Text>
            <Text>{result.rating} Yıldız, {result.review_count} Değerlendirme</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginRight: 15,
        paddingBottom: 10
    },
    image: {
        width: 250,
        height: 120,
        borderRadius: 4,
        marginBottom: 5
    },
    name: {
        fontWeight: 'bold'
    }
});

export default ResultDetail;
