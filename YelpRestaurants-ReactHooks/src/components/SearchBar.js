import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import {Feather} from '@expo/vector-icons';

const SearchBar = ({search, onSearchChange, onSearchSubmit}) => {
    return (
        <View style={styles.background}>
            <Feather style={styles.icon} name='search' size={30}/>
            <TextInput
                autoCapitalize='none'
                autoCorrect={false}
                style={styles.input}
                placeholder='Restauran Ara'
                value={search}
                onChangeText={onSearchChange}
                onEndEditing={onSearchSubmit}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        marginTop: 10,
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginRight: 10,
        marginBottom: 10,
        flexDirection: 'row'
    },
    input: {
        fontSize: 18,
        flex: 1,
        paddingHorizontal: 5
    },
    icon: {
        fontSize: 30,
        alignSelf: 'center',
        marginHorizontal: 5
    }
});

export default SearchBar;
