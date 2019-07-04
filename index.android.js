/**
 * @format
 */

import {AppRegistry, UIManager} from 'react-native';
import App from './src/app';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);

UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
