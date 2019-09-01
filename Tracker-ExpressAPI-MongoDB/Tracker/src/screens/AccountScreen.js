import React, {useContext} from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from "react-navigation";
import {Button, Text} from 'react-native-elements';
import {Context as AuthContext} from '../context/AuthContext';
import Spacer from "../components/Spacer";
import {FontAwesome} from "@expo/vector-icons";

const AccountScreen = () => {
    const {signOut} = useContext(AuthContext);

    return (
        <SafeAreaView forceInset={{top: 'always'}}>
            <Text h4>Hesap</Text>
            <Spacer>
                <Button
                    title='Çıkış Yap'
                    onPress={signOut}
                />
            </Spacer>
        </SafeAreaView>
    );
};

AccountScreen.navigationOptions = {
    title: 'Hesap',
    tabBarIcon: <FontAwesome name='gear' size={20}/>
};

const styles = StyleSheet.create({});

export default AccountScreen;
