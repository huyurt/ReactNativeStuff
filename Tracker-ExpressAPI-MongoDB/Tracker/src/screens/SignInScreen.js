import React, {useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import {NavigationEvents} from "react-navigation";
import {Context as AuthContext} from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import NavigationLink from "../components/NavigationLink";

const SignInScreen = ({navigation}) => {
    const {state, signIn, clearErrorMessage} = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <NavigationEvents onWillBlur={clearErrorMessage}/>
            <AuthForm
                headerText="Tracker'a Giriş Yap"
                errorMessage={state.errorMessage}
                submitButtonText='Giriş Yap'
                onSubmit={signIn}
            />
            <NavigationLink
                routeName='SignUp'
                text='Hesabınız yok mu? Kayıt ol!'
            />
        </View>
    );
};

SignInScreen.navigationOptions = () => {
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

export default SignInScreen;
