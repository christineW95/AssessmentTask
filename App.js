

import React, { Fragment } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {

  QueryClient,
  QueryClientProvider,
  useQuery,
} from 'react-query'

import { fetchBooks } from './src/APIs/BookAPIs';
import { SearchPage } from './src/screens/SearchResultsPage';
// Create a client
const queryClient = new QueryClient()
const App = () => {

  return (
    <SafeAreaView style={{
      backgroundColor: '#F9EFE4',
      flex: 1
    }}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <QueryClientProvider client={queryClient}>
          <SearchPage />
        </QueryClientProvider>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#F9EFE4',
    flex: 1
  },
  body: {
    backgroundColor: '#EFC89B',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
