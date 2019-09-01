import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import AccountScreen from "./src/screens/AccountScreen";
import SignInScreen from "./src/screens/SignInScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import TrackListScreen from "./src/screens/TrackListScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";
import TrackDetailScreen from "./src/screens/TrackDetailScreen";
import {Provider as AuthProvider} from "./src/context/AuthContext";
import {Provider as LocationProvider} from './src/context/LocationContext';
import {Provider as TrackProvider} from './src/context/TrackContext';
import {setNavigator} from "./src/navigationRef";
import ResolveAuthScreen from "./src/screens/ResolveAuthScreen";
import {FontAwesome} from "@expo/vector-icons";

const trackListFlow = createStackNavigator({
    TrackList: TrackListScreen,
    TrackDetail: TrackDetailScreen
});

trackListFlow.navigationOptions = {
    title: 'Konumlar',
    tabBarIcon: <FontAwesome name='th-list' size={20}/>
};

const switchNavigator = createSwitchNavigator({
    ResolveAuth: ResolveAuthScreen,
    loginFlow: createStackNavigator({
        SignIn: SignInScreen,
        SignUp: SignUpScreen
    }),
    mainFlow: createBottomTabNavigator({
        trackListFlow: trackListFlow,
        TrackCreate: TrackCreateScreen,
        Account: AccountScreen
    })
});

const App = createAppContainer(switchNavigator);

export default () => {
    return (
        <TrackProvider>
            <LocationProvider>
                <AuthProvider>
                    <App ref={nav => {
                        setNavigator(nav);
                    }}/>
                </AuthProvider>
            </LocationProvider>
        </TrackProvider>
    );
};
