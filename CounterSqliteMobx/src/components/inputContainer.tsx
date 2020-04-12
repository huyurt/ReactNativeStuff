import React, {useContext, useEffect} from "react";
import {StyleSheet, View, Text} from "react-native";
import {observer} from "mobx-react-lite";
import {RootStoreContext} from "../stores/rootStore";
import LoadingIndicator from "./loadingIndicator";

const InputContainer: React.FC = () => {
    const rootStore = useContext(RootStoreContext);
    const {containerLoaded, setContainerLoaded} = rootStore.appStore;
    const {counter, getFirstCounter} = rootStore.counterStore;

    useEffect(() => {
        getFirstCounter().finally(() => setContainerLoaded());
    }, [setContainerLoaded]);

    if (!containerLoaded) return <LoadingIndicator/>;

    return (
        <View style={styles.container}>
            <Text style={{color: 'white'}}>{counter}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 75,
        width: '60%',
        backgroundColor: 'red'
    }
});

export default observer(InputContainer);