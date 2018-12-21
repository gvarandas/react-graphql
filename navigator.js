import { createStackNavigator } from 'react-navigation';

import BookList from './pages/BookList';
import BookAdd from './pages/BookAdd';
import BookDetail from './pages/BookDetail';

const AppNavigator = createStackNavigator({
  BookList,
  BookAdd,
  BookDetail,
});

export default AppNavigator;
