import React from 'react';
import {
    View,
    Text,
    FlatList,
} from 'react-native';
import {
    useQuery,
    QueryClient,
    QueryClientProvider,
} from 'react-query'
import { fetchBooks } from '../APIs/BookAPIs';
import SearchComponent from '../components/searchTextInput';


export const SearchPage = () => {
    const queryClient = new QueryClient();
    const numOfColumns = 2;
    const renderItem = ({ item }) => {
        return <Book book={item} />
    }
    // Queries
    const { isLoading, isError, data, error } = useQuery(['books', 'OL7353617M'], ({ queryKey }) => fetchBooks(queryKey[1]));
    console.warn(data);
    return (
        <View style={{ padding: 10 }}>
            <QueryClientProvider client={queryClient}>
                <>
                    <Text style={{ fontWeight: '700', fontSize: 16 }}>Search</Text>
                    <View style={{ marginVertical: 5 }}>
                        <SearchComponent onQueryChange={ } />
                    </View>
                    <FlatList
                        data={[{
                            id: '1',
                            title: 'test'
                        }]}
                        numColumns={numOfColumns}
                        extraData={numOfColumns}
                        renderItem={renderItem} />
                </>

            </QueryClientProvider>


        </View>
    )
}
