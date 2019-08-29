import React, {useContext} from 'react';
import {StyleSheet} from 'react-native';
import {Context} from "../context/BlogContextReducerHook";
import BlogPostForm from "../components/BlogPostForm";

const CreateScreen = ({navigation}) => {
    const {addBlogPost} = useContext(Context);

    return (
        <BlogPostForm
            onSubmit={(title, content) => addBlogPost(title, content, () => navigation.navigate('IndexReducerHook'))}
        />
    );
};

const styles = StyleSheet.create({});

export default CreateScreen;
