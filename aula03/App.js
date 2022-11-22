import React from 'react';
import {Home} from './src/Screens/Home';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator()

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator name="Home" component={Home} />
      <Stack.Navigator name="Detalhes" component={() => <Text>DETALHES</Text>} />  
    </NavigationContainer>
  )
};

export default App;