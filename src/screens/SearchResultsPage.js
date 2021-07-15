import React from 'react';
import {
    View,
    Text,
    ActivityIndicator,
} from 'react-native';
import {
    useQuery,
    QueryClient,
    QueryClientProvider,
} from 'react-query'
import { fetchBooks } from '../APIs/BookAPIs';
import Book from '../components/book';
import SearchComponent from '../components/searchTextInput';


export const SearchPage = ({ navigation }) => {
    const queryClient = new QueryClient();
    const [searchQuery, setSearchQuery] = React.useState("");
    const { isLoading, isError, data, error } = useQuery(['books', searchQuery], ({ queryKey }) => fetchBooks(queryKey[1]));
    const onBookPress = (book) => {
        navigation.navigate('BookDetails', {
            book: book
        });
    }
    return (
        <View style={{
            padding: 10, paddingVertical: 50, backgroundColor: '#F9EFE4',
            flex: 1
        }}>
            <QueryClientProvider client={queryClient}>

                <Text style={{ fontWeight: '700', fontSize: 20 }}>Search</Text>
                <View style={{ marginVertical: 5 }}>
                    <SearchComponent searchQuery={searchQuery} onQueryChange={setSearchQuery} />
                </View>
                {
                    isLoading && searchQuery !== "" ? <ActivityIndicator size={'small'} /> : null
                }
                {!isLoading && data ? <Book data={data} onBookPress={onBookPress} /> : null}

            </QueryClientProvider>


        </View>
    )
}
