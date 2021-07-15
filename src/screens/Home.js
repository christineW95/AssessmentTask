
import React from 'react';
import {
    View,
    Text,
    FlatList,
    ActivityIndicator,
    SafeAreaView,
    ScrollView,
} from 'react-native';
import {
    useQuery,
    QueryClient,
    QueryClientProvider,
} from 'react-query'
import { fetchBooks } from '../APIs/BookAPIs';
import Book from '../components/book';
import SearchComponent from '../components/searchTextInput';
import { SearchPage } from './SearchResultsPage';


export const Home = () => {
    const queryClient = new QueryClient();
    const [searchQuery, setSearchQuery] = React.useState("");
    //TODO:change number to searchQury
    const { isLoading, isError, data, error } = useQuery(['books', '9780140328721'], ({ queryKey }) => fetchBooks(queryKey[1]));

    return (
        <SafeAreaView style={{
            backgroundColor: '#F9EFE4',
            flex: 1
        }}>
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
            >
                <QueryClientProvider client={queryClient}>
                    <SearchPage />
                </QueryClientProvider>
            </ScrollView>
        </SafeAreaView>

    )
}
