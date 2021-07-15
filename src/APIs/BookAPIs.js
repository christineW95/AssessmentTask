import axios from "axios";
import * as APIsURLs from '../config/APIConfig';

export const fetchBooks = async (query) => {
    const response = await axios.get(APIsURLs.config.base_URL + query + '.json')
    return response.data;
};
