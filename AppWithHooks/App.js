import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import ListScreen from './src/screens/ListScreen';
import ImageScreen from './src/screens/ImageScreen';
import CounterHookScreen from './src/screens/CounterHookScreen';
import ColorHookScreen from "./src/screens/ColorHookScreen";
import SquareHookScreen from "./src/screens/SquareHookScreen";
import SquareReducerHookScreen from "./src/screens/SquareReducerHookScreen";
import CounterReducerHookScreen from "./src/screens/CounterReducerHookScreen";
import TextInputHookScreen from "./src/screens/TextInputHookScreen";

const navigator = createStackNavigator(
    {
        Home: HomeScreen,
        FlatList: ListScreen,
        Image: ImageScreen,
        TextInputHook: TextInputHookScreen,
        CounterHook: CounterHookScreen,
        CounterReducerHook: CounterReducerHookScreen,
        ColorHook: ColorHookScreen,
        SquareColorHook: SquareHookScreen,
        SquareColorReducerHook: SquareReducerHookScreen
    },
    {
        initialRouteName: 'Home',
        defaultNavigationOptions: {
            title: 'App'
        }
    }
);

export default createAppContainer(navigator);
