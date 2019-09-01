import React, {useContext} from 'react';
import {StyleSheet} from 'react-native';
import {Button, Input} from 'react-native-elements';
import Spacer from "./Spacer";
import {Context as LocationContext} from '../context/LocationContext';
import useSaveTrack from "../hooks/useSaveTrack";

const TrackForm = () => {
    const {
        state: {name, recording, locations},
        startRecording, stopRecording, changeName
    } = useContext(LocationContext);
    const [saveTrack] = useSaveTrack();

    return (
        <>
            <Spacer>
                <Input
                    placeholder='Adınızı Soyadınızı Girin'
                    value={name}
                    onChangeText={changeName}
                />
            </Spacer>
            <Spacer>
                {recording ?
                    (<Button title='Takibi Durdur' onPress={stopRecording}/>)
                    : (<Button title='Takibi Başlat' onPress={startRecording}/>)
                }
            </Spacer>
            <Spacer>
                {!recording && locations.length ? (<Button title='Takibi Kaydet' onPress={saveTrack}/>) : null}
            </Spacer>
        </>
    );
};

const styles = StyleSheet.create({});

export default TrackForm;
