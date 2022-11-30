/**
 * @format
 */

import {AppRegistry} from 'react-native';
import BookFood from './component/BookFood/index';
import BookSeat from './component/BookSeat/index';
//import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, (props) => BookFood);
