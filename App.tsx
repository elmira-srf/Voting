import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import UserScreen from './screens/UserScreen';
import AdminScreen from './screens/AdminScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="User">
        <Stack.Screen name="User" component={UserScreen} />
        <Stack.Screen name="Admin" component={AdminScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
