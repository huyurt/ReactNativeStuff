import React, {useState} from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';

const TextInputHookScreen = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View>
            <View style={styles.container}>
                <Text>İsminizi Girin:</Text>
                <TextInput
                    style={styles.input}
                    autoCapitalize='none'
                    autoCorrect={false}
                    value={name}
                    onChangeText={newValue => setName(newValue)}
                />
                {name !== '' ? <Text>İsmim {name}</Text> : null}
            </View>
            <View style={styles.container}>
                <Text>Şifreyi Girin:</Text>
                <TextInput
                    style={styles.input}
                    autoCapitalize='none'
                    autoCorrect={false}
                    value={password}
                    secureTextEntry={true}
                    onChangeText={newValue => setPassword(newValue)}
                />
                {password !== '' && password.length < 4 ? <Text>Şifre en az 4 karakter olmalıdır.</Text> : null}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 5
    },
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }
});

export default TextInputHookScreen;
