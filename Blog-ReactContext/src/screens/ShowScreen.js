import React, {useContext} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {Context} from "../context/BlogContextReducerHook";
import {EvilIcons} from "@expo/vector-icons";

const ShowScreen = ({navigation}) => {
    const {state} = useContext(Context);

    const blogPost = state.find(
        blogPost => blogPost.id === navigation.getParam('id')
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{blogPost.title}</Text>
            <Text style={styles.content}>{blogPost.content}</Text>
        </View>
    );
};

ShowScreen.navigationOptions = ({navigation}) => {
    return {
        headerRight: (
            <TouchableOpacity onPress={() => navigation.navigate('Edit', {id: navigation.getParam('id')})}>
                <EvilIcons name='pencil' size={30}/>
            </TouchableOpacity>
        )
    };
};

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 5
    },
    content: {
        fontSize: 18
    }
});

export default ShowScreen;
