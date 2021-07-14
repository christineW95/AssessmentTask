import axios from "axios";
import * as APIsURLs from '../config/APIConfig';

export const fetchBooks = async (query) => {
    console.warn(query)
    const data = await axios.get('https://openlibrary.org/books/' + query + '.json')
    return JSON.stringify(data);
};
