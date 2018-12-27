import { createStackNavigator } from 'react-navigation';

import BookList from './src/pages/BookList';
import BookAdd from './src/pages/BookAdd';
import BookDetail from './src/pages/BookDetail';

const AppNavigator = createStackNavigator({
  BookList,
  BookAdd,
  BookDetail,
});

export default AppNavigator;
