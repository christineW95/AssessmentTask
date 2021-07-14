import * as React from "react";
import { Searchbar } from "react-native-paper";
const SearchComponent = ({ searchQuery = '', onQueryChange }) => {
    //TODO:validate on number only
    return (
        <Searchbar
            placeholder="Search by ISBN"
            icon={"search-web"}
            style={{
                borderWidth: 1,
                borderRadius: 5,
                borderColor: "lightgray",
            }}
            onChangeText={onQueryChange}
            value={searchQuery}
        />
    );
};

export default SearchComponent;
