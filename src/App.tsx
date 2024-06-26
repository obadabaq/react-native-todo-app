import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import TasksScreen from './modules/tasks/presentation/screens/tasks.screen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddTaskScreen from './modules/tasks/presentation/screens/add.task.screen';
import { Provider } from 'react-redux';
import { store } from './redux/root.store';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}>
          <Stack.Screen
            name="TasksScreen"
            component={TasksScreen}
          />
          <Stack.Screen
            name="AddTaskScreen"
            component={AddTaskScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;