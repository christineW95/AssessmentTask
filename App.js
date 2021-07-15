
import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { SearchPage } from './src/screens/SearchResultsPage';
import { Text } from 'react-native';
import { QueryClient, QueryClientProvider } from 'react-query';
import BookDetails from './src/screens/BookDetails';
const AppNavigator = createStackNavigator({
  Home: {
    screen: SearchPage,
  },
  BookDetails: {
    screen: BookDetails
  }
});
const AppContainer = createAppContainer(AppNavigator);
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AppContainer />
    </QueryClientProvider>
  );
};


export default App;
