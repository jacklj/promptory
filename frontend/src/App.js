import { StackNavigator } from 'react-navigation';
import Home from './components/Home';

const App = StackNavigator({
  Home: { screen: Home },
});

export default App;
