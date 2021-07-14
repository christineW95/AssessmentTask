

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';

import Home from './src/screens/Home';

const App = () => {
  return (
    <SafeAreaView style={{
      backgroundColor: '#F9EFE4',
      flex: 1
    }}>
      <Home />
    </SafeAreaView>
  );
};


export default App;
