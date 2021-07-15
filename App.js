
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from './src/screens/Home';
const Stack = createStackNavigator();
const App = ({ navigation }) => {

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode='screen' initialRouteName='Main'>
        <Stack.Screen name="Main" component={Home} />
        {/* <Stack.Screen name="BookDetails" component={BookDetails} /> */}

      </Stack.Navigator>
    </NavigationContainer>

  );
};


export default App;
