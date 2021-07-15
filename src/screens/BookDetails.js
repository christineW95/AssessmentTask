import React from 'react';
import {
    View,
    Text,
    FlatList,
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


export const BookDetails = (props) => {

    return (
        <View>


        </View>
    )
}
