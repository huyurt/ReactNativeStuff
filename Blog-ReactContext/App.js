import React from 'react';
import {createStackNavigator, createAppContainer} from "react-navigation";
// import IndexScreenStateHook from "./src/screens/IndexScreenStateHook";
import IndexScreenReducerHook from './src/screens/IndexScreenReducerHook';
// import {BlogProviderStateHook} from "./src/context/BlogContextStateHook";
import {Provider} from './src/context/BlogContextReducerHook';
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from "./src/screens/CreateScreen";
import EditScreen from "./src/screens/EditScreen";

const navigation = createStackNavigator(
    {
        // IndexStateHook: IndexScreenStateHook,
        IndexReducerHook: IndexScreenReducerHook,
        Show: ShowScreen,
        Create: CreateScreen,
        Edit: EditScreen
    },
    {
        initialRouteName: 'IndexReducerHook',
        defaultNavigationOptions: {
            title: 'Blog'
        }
    }
);

const App = createAppContainer(navigation);

// export default () => {
//     return (
//         <BlogProviderStateHook>
//             <App/>
//         </BlogProviderStateHook>
//     );
// };

export default () => {
    return (
        <Provider>
            <App/>
        </Provider>
    );
}