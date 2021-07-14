import * as React from "react";
import { Text, View } from "react-native";
const Book = (props) => {
    const { number_of_pages, title, revision, publish_date, latest_revision } = props.data;
    return (
        <View style={{ backgroundColor: 'white', borderRadius: 5, borderWidth: 1, borderColor: 'transparent', padding: 10, justifyContent: 'space-around' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 16 }}>  {title || 'Not specified'} </Text>
            <Text style={{ fontSize: 14, opacity: 0.6 }}> Number of Pages: {number_of_pages || 'Not specified'} </Text>
            <Text style={{ fontSize: 14, opacity: 0.6 }}>Revision: {revision || 'Not specified'} </Text>
            <Text style={{ fontSize: 14, opacity: 0.6 }}> Publish Date: {publish_date || 'Not specified'} </Text>
            <Text style={{ fontSize: 14, opacity: 0.6 }}> Latest Revision: {latest_revision || 'Not specified'} </Text>
        </View>
    );
};

export default Book;
