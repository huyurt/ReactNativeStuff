import React, {useContext} from "react";
import {StyleSheet, View, TouchableOpacity} from "react-native";
import {observer} from "mobx-react-lite";
import {Ionicons} from '@expo/vector-icons';
import {RootStoreContext} from "../stores/rootStore";

const ButtonContainer: React.FC = () => {
    const rootStore = useContext(RootStoreContext);
    const {changeCounter} = rootStore.counterStore;

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={[styles.button, {backgroundColor: 'orange'}]}
                onPress={() => changeCounter(1)}
            >
                <Ionicons name='md-arrow-up' size={17}/>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.button, {backgroundColor: 'yellow'}]}
                onPress={() => changeCounter(-1)}
            >
                <Ionicons name='md-arrow-down' size={17}/>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 75,
        width: '40%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'green'
    },
    button: {
        height: '50%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default observer(ButtonContainer);