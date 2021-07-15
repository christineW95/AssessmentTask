import * as React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
const Book = (props) => {
    const { number_of_pages, title, revision, publish_date, latest_revision } = props.data;
    const { onBookPress } = props;
    console.warn({ number_of_pages, title, revision, publish_date, latest_revision })

    return (

        <TouchableOpacity style={{ flexDirection: 'row', backgroundColor: 'white', borderRadius: 5, borderWidth: 1, borderColor: 'transparent', paddingVertical: 10 }}
            onPress={() => onBookPress(props.data)} >
            <View style={{ flex: 8, paddingHorizontal: 5 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 16 }}> {title || 'Not specified'} </Text>
                <Text style={{ fontSize: 14, opacity: 0.6 }}> Number of Pages: {number_of_pages || 'Not specified'} </Text>
                <Text style={{ fontSize: 14, opacity: 0.6 }}> Revision: {revision || 'Not specified'} </Text>
                <Text style={{ fontSize: 14, opacity: 0.6 }}> Publish Date: {publish_date || 'Not specified'} </Text>
                <Text style={{ fontSize: 14, opacity: 0.6 }}> Latest Revision: {latest_revision || 'Not specified'} </Text>

            </View>
            <View style={{ flex: 2 }}>
                <Image resizeMode='contain' style={{ width: '70%', height: '70%', flex: 1 }} source={require('../assets/images/book.png')} />

            </View>

        </TouchableOpacity>

    );
};

export default Book;
