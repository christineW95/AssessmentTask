import * as React from "react";
import { Text } from "react-native";
import { Searchbar } from "react-native-paper";
const SearchComponent = ({ searchQuery = '', onQueryChange }) => {
    //TODO:validate on number only
    let regex = new RegExp('^[0-9]*$');
    const [isValid, setIsValid] = React.useState(true)
    return (
        <>
            <Searchbar
                placeholder="Search by ISBN"
                icon={"search-web"}
                keyboardType='number-pad'
                style={{
                    borderWidth: 1,
                    borderRadius: 5,
                    borderColor: "lightgray",
                }}
                onChangeText={(text) => {
                    if (regex.test(text)) {
                        setIsValid(true)
                        onQueryChange(text)
                    }
                    else
                        setIsValid(false)
                }}
                value={searchQuery}
            />
            {!isValid ?
                <Text style={{ color: 'red', fontSize: 13 }}> Numbers only is allowed</Text>
                : null
            }
        </>
    );
};

export default SearchComponent;
