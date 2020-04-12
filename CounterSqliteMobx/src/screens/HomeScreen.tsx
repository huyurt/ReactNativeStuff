import React, {useContext} from "react";
import {Button, StyleSheet, View} from "react-native";
import {useNavigation} from '@react-navigation/native';
import {observer} from "mobx-react-lite";
import {RootStoreContext} from "../stores/rootStore";
import InputContainer from "../components/inputContainer";
import ButtonContainer from "../components/buttonContainer";

interface IProps {
    screenIndex: number;
}

const HomeScreen: React.FC<IProps> = ({screenIndex}) => {
    const rootStore = useContext(RootStoreContext);
    const {getNextScreenName} = rootStore.counterStore;
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <InputContainer/>
                <ButtonContainer/>
            </View>
            <View style={styles.screenButtonContainer}>
                <Button title='Next Screen' onPress={() => navigation.navigate(getNextScreenName(screenIndex))}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '40%',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    innerContainer: {
        flexDirection: 'row'
    },
    screenButtonContainer: {
        marginTop: 25
    }
});

export default observer(HomeScreen);