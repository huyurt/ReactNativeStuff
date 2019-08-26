import React from 'react';
import {createStackNavigator, createAppContainer} from "react-navigation";
// import IndexScreenStateHook from "./src/screens/IndexScreenStateHook";
import IndexScreenReducerHook from './src/screens/IndexScreenReducerHook';
// import {BlogProviderStateHook} from "./src/context/BlogContextStateHook";
import {BlogProviderReducerHook} from "./src/context/BlogContextReducerHook";

const navigation = createStackNavigator(
    {
        // IndexStateHook: IndexScreenStateHook,
        IndexReducerHook: IndexScreenReducerHook
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
    return(
      <BlogProviderReducerHook>
          <App/>
      </BlogProviderReducerHook>
    );
}