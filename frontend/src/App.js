import {
  AppRegistry,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import { Home } from './components/Home';

const App = StackNavigator({
  Home: { screen: Home },
});

AppRegistry.registerComponent('App', () => App);

export default App;