import React, {useContext} from 'react';
import {StyleSheet, View, Text, FlatList, Button} from 'react-native';
import BlogContextReducerHook from "../context/BlogContextReducerHook";

const IndexScreenStateHook = () => {
    const {blogPosts, addBlogPost} = useContext(BlogContextReducerHook);

    return (
        <View>
            <Text>Index Screen</Text>
            <Button title='Post Ekle' onPress={addBlogPost}/>
            <FlatList
                data={blogPosts}
                keyExtractor={data => data.title}
                renderItem={({item}) => {
                    return <Text>{item.title}</Text>
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({});

export default IndexScreenStateHook;
