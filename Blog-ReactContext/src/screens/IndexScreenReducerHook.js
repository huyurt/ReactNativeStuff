import React, {useContext, useEffect} from 'react';
import {StyleSheet, View, Text, FlatList, TouchableOpacity} from 'react-native';
import {Context} from "../context/BlogContextReducerHook";
import {Feather} from '@expo/vector-icons';

const IndexScreenStateHook = ({navigation}) => {
    const {state, getBlogPosts, deleteBlogPost} = useContext(Context);

    useEffect(() => {
        getBlogPosts();
    }, []);

    return (
        <View>
            <FlatList
                data={state}
                keyExtractor={data => data.title}
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Show', {id: item.id})}
                        >
                            <View style={styles.row}>
                                <Text style={styles.title}>
                                    {item.title}
                                </Text>
                                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                                    <Feather style={styles.icon} name='trash-2'/>
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
};

IndexScreenStateHook.navigationOptions = ({navigation}) => {
    return {
        headerRight: (
            <TouchableOpacity onPress={() => navigation.navigate('Create')}>
                <Feather name='plus' size={30} style={{marginRight: 5}}/>
            </TouchableOpacity>
        )
    };
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderTopWidth: 1,
        borderColor: 'gray'
    },
    title: {
        fontSize: 18
    },
    icon: {
        fontSize: 24
    }
});

export default IndexScreenStateHook;
