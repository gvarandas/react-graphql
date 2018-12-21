import { createStackNavigator } from 'react-navigation';

import BookList from './components/BookList';
import BookAdd from './components/BookAdd';

const AppNavigator = createStackNavigator({
  BookList,
  BookAdd,
});

export default AppNavigator;
