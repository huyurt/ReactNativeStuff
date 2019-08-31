import React, {useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import {NavigationEvents} from "react-navigation";
import {Context as AuthContext} from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import NavigationLink from "../components/NavigationLink";

const SignUpScreen = ({navigation}) => {
    const {state, signUp, clearErrorMessage} = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <NavigationEvents onWillBlur={clearErrorMessage}/>
            <AuthForm
                headerText="Tracker'a Kayıt Ol"
                errorMessage={state.errorMessage}
                submitButtonText='Kayıt Ol'
                onSubmit={signUp}
            />
            <NavigationLink
                routeName='SignIn'
                text='Hesabınız var mı? Giriş yap!'
            />
        </View>
    );
};

SignUpScreen.navigationOptions = () => {
    return {
        header: null
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 250
    }
});

export default SignUpScreen;
