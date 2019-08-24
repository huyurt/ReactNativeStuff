import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import ListScreen from './src/screens/ListScreen';
import ImageScreen from './src/screens/ImageScreen';
import CounterScreen from './src/screens/CounterScreen';
import ColorScreen from "./src/screens/ColorScreen";
import SquareScreen from "./src/screens/SquareScreen";

const navigator = createStackNavigator(
    {
        Home: HomeScreen,
        FlatList: ListScreen,
        Image: ImageScreen,
        Counter: CounterScreen,
        Color: ColorScreen,
        SquareColor: SquareScreen
    },
    {
        initialRouteName: 'Home',
        defaultNavigationOptions: {
            title: 'App'
        }
    }
);

export default createAppContainer(navigator);
