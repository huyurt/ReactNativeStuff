import React, {useState} from 'react';
import {StyleSheet, View, Text, TextInput, Button} from 'react-native';

const BlogPostForm = ({onSubmit}) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    return (
        <View>
            <Text style={styles.label}>Başlık Gir:</Text>
            <TextInput
                style={styles.input}
                value={title}
                onChangeText={text => setTitle(text)}
            />
            <Text style={styles.label}>İçerik Gir:</Text>
            <TextInput
                style={styles.input}
                value={content}
                onChangeText={text => setContent(text)}
            />
            <Button
                title='Blog Gönderisini Kaydet'
                onPress={() => onSubmit(title, content)}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        marginVertical: 15,
        marginHorizontal: 5,
        padding: 5
    },
    label: {
        fontSize: 20,
        marginBottom: 5,
        marginLeft: 5
    }
});

export default BlogPostForm;
