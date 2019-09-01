import React, {useState, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {Text} from 'react-native-elements';
import {SafeAreaView} from "react-navigation";
import {requestPermissionsAsync} from "expo-location";
import Map from '../components/Map';

const TrackCreateScreen = () => {
    const [err, setErr] = useState(null);

    const startWatching = async () => {
        try {
            await requestPermissionsAsync();
        } catch (e) {
            setErr(e);
        }
    };

    useEffect(() => {
        startWatching();
    }, []);

    return (
        <SafeAreaView forceInset={{top: 'always'}}>
            <Text h4>Track Oluştur</Text>
            <Map/>
            {err ? <Text>Konum hizmetini aktifleştiriniz.</Text> : null}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;
