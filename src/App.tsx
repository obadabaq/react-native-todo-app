import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TasksScreen from './modules/tasks/presentation/tasks.screen';
import { Provider } from 'react-redux';
import { store } from './redux/root.store';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <TasksScreen></TasksScreen>
    </Provider>
  );
};

export default App;