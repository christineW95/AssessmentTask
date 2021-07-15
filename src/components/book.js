import * as React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
const Book = (props) => {
    const { number_of_pages, title, revision, publish_date, latest_revision } = props.data;
    return (
        <TouchableOpacity >

            <View style={{ backgroundColor: 'white', borderRadius: 5, borderWidth: 1, borderColor: 'transparent', padding: 10, paddingVertical: 20, justifyContent: 'space-around' }}>
                <View style={{ flexDirection: 'row', flex: 1 }}>
                    <View style={{ flex: 8 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 16 }}> {title || 'Not specified'} </Text>
                        <Text style={{ fontSize: 14, opacity: 0.6 }}> Number of Pages: {number_of_pages || 'Not specified'} </Text>
                        <Text style={{ fontSize: 14, opacity: 0.6 }}> Revision: {revision || 'Not specified'} </Text>
                        <Text style={{ fontSize: 14, opacity: 0.6 }}> Publish Date: {publish_date || 'Not specified'} </Text>
                        <Text style={{ fontSize: 14, opacity: 0.6 }}> Latest Revision: {latest_revision || 'Not specified'} </Text>

                    </View>
                    <View style={{ flex: 2 }}>
                        <Image style={{ width: '100%', height: '70%' }} source={require('../assets/images/book.png')} />

                    </View>
                </View>
            </View>
        </TouchableOpacity>

    );
};

export default Book;
