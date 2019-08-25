import React from 'react';
import {StyleSheet, View, FlatList, TouchableOpacity, Text} from 'react-native';
import {withNavigation} from 'react-navigation';
import ResultDetail from "./ResultDetail";

const ResultList = ({navigation, title, results}) => {
    if(!results.length){
        return null;
    }

    return (
        <View>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                horizontal
                showHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={result => result.id}
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('ResultsShow', {id: item.id})}>
                            <ResultDetail result={item}/>
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginRight: 15,
        marginVertical: 5
    }
});

export default withNavigation(ResultList);
