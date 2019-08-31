import React, {useContext} from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from "react-navigation";
import {Button, Text} from 'react-native-elements';
import {Context as AuthContext} from '../context/AuthContext';
import Spacer from "../components/Spacer";

const AccountScreen = () => {
    const {signOut} = useContext(AuthContext);

    return (
        <SafeAreaView forceInset={{top: 'always'}}>
            <Text h4>AccountScreen</Text>
            <Spacer>
                <Button
                    title='Çıkış Yap'
                    onPress={signOut}
                />
            </Spacer>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({});

export default AccountScreen;
