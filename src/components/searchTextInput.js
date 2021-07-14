import * as React from "react";
import { Searchbar } from "react-native-paper";
const SearchComponent = () => {
    const [searchQuery, setSearchQuery] = React.useState("");

    const onChangeSearch = (query) => setSearchQuery(query);

    return (
        <Searchbar
            placeholder="Search by ISBN"
            icon={"search-web"}
            style={{
                borderWidth: 1,
                borderRadius: 5,
                borderColor: "lightgray",
            }}
            onChangeText={onChangeSearch}
            value={searchQuery}
        />
    );
};

export default SearchComponent;
