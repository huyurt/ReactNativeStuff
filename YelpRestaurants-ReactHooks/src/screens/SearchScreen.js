import React, {useState} from 'react';
import {StyleSheet, ScrollView, View, Text} from 'react-native';
import SearchBar from "../components/SearchBar";
import ResultList from "../components/ResultList";
import useResults from '../hooks/useResults';

const SearchScreen = () => {
    const [search, setSearch] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    const fiyataGoreFiltrele = (price) => {
        return price ? results.filter(result => result.price === price) : results.filter(result => !['₺', '₺₺', '₺₺₺'].includes(result.price));
    };

    return (
        <View style={styles.container}>
            <SearchBar
                search={search}
                onSearchChange={setSearch}
                onSearchSubmit={() => searchApi(search)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <ScrollView>
                <ResultList
                    results={fiyataGoreFiltrele('₺')}
                    title='Ucuz Restoranlar'
                />
                <ResultList
                    results={fiyataGoreFiltrele('₺₺')}
                    title='Normal Restoranlar'
                />
                <ResultList
                    results={fiyataGoreFiltrele('₺₺₺')}
                    title='Pahalı Restoranlar'
                />
                <ResultList
                    results={fiyataGoreFiltrele('')}
                    title='Fiyatı Bulunamayan İşletmeler'
                />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 10,
        marginBottom: 10
    }
});

export default SearchScreen;
