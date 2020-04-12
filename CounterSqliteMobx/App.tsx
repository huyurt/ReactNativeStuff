import React, {useContext, useEffect} from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import 'mobx-react-lite/batchingForReactNative'
import {observer} from "mobx-react-lite";
import {createConnection} from "typeorm";
import HomeScreen from "./src/screens/HomeScreen";
import {connectionOptions, downloadDatabase} from "./src/database/dbConnector";
import {RootStoreContext} from "./src/stores/rootStore";
import LoadingIndicator from "./src/components/loadingIndicator";

const Stack = createStackNavigator();

const App: React.FC = () => {
    const rootStore = useContext(RootStoreContext);
    const {appLoaded, setAppLoaded} = rootStore.appStore;

    useEffect(() => {
        downloadDatabase()
            .then(() => createConnection(connectionOptions)
                .then(() => setAppLoaded())
                .catch(error => {
                    if (!error.toString().includes('AlreadyHasActiveConnectionError'))
                        console.log('ERROR: Database connection error! ' + error);
                    else
                        setAppLoaded();
                }))
            .catch(error => console.log('ERROR: Database root error! ' + error));
    }, [setAppLoaded]);

    if (!appLoaded) return <LoadingIndicator content="Uygulama yükleniyor..."/>;
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='First'
                screenOptions={{/* We will want to specify the same options for all of the screens in the navigator. */}}
            >
                <Stack.Screen
                    options={{title: 'First Screen'}}
                    name='First'
                >
                    {props => <HomeScreen screenIndex={1}/>}
                </Stack.Screen>
                <Stack.Screen
                    options={{title: 'Second Screen'}}
                    name='Second'
                >
                    {props => <HomeScreen screenIndex={2}/>}
                </Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default observer(App);