

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
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { fetchBooks } from './src/APIs/BookAPIs';
import SearchComponent from './src/components/searchTextInput';
// Create a client
const queryClient = new QueryClient()

function Todos() {
  // Queries
  const { isLoading, isError, data, error } = useQuery(['books', 'OL7353617M'], ({ queryKey }) => fetchBooks(queryKey[1]));
  console.warn(data);

  return (
    <View style={{ padding: 10 }}>
      <Text style={{ fontWeight: '700', fontSize: 16 }}>Search</Text>
      <View style={{ marginVertical: 5 }}>
        <SearchComponent />
      </View>
      {/* {data.map(book => (
        <Text key={book.id}>{book.title}</Text>
      ))} */}

    </View>
  )
}

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
          <Todos />
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
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
