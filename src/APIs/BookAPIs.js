import axios from "axios";
import * as APIsURLs from '../config/APIConfig';

export const fetchBooks = async (query) => {

    const response = await axios.get('https://openlibrary.org/isbn/' + query + '.json')
    return response.data;
};
