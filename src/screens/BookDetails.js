import React from 'react';
import {
    View,
    Text,
    FlatList,
    ActivityIndicator,
    Image,
    ScrollView,
    ImageBackground,
} from 'react-native';



const BookDetails = (props) => {
    const { navigation } = props;
    const book = navigation.getParam('book', {})
    const { number_of_pages, title, revision, publish_date, latest_revision, publishers, contributions, isbn_13, created, first_sentence } = book;

    return (
        <ScrollView style={{ backgroundColor: '#F9EFE4', }} contentContainerStyle={{ flex: 1, backgroundColor: '#F9EFE4', paddingHorizontal: 20 }}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
                <ImageBackground resizeMode='center' style={{ width: '70%', height: '70%', flex: 1, left: 40 }} source={require('../assets/images/book.png')} />

            </View>

            <Text style={{ fontWeight: 'bold', fontSize: 22, paddingVertical: 20 }}>{title || 'Not specified'} </Text>

            <Text style={{ fontWeight: 'bold', fontSize: 16 }}>First Sentence </Text>
            <Text style={{ fontSize: 14, opacity: 0.6 }}>{first_sentence['value'] || 'Not specified'} </Text>


            <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Publishers </Text>

            {
                publishers.map(pub => {
                    return (
                        <>


                            <Text style={{ fontSize: 14, opacity: 0.6 }}>{pub || 'Not specified'} </Text>

                        </>

                    )
                })
            }
            <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Contributions </Text>


            {
                contributions.map(cont => {
                    return (
                        <Text style={{ fontSize: 14, opacity: 0.6 }}>{cont || 'Not specified'} </Text>

                    )
                })
            }


            <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Number of Pages </Text>
            <Text style={{ fontSize: 14, opacity: 0.6 }}>{number_of_pages || 'Not specified'} </Text>


            <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Revision </Text>
            <Text style={{ fontSize: 14, opacity: 0.6 }}>{revision || 'Not specified'} </Text>


            <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Publish Date </Text>
            <Text style={{ fontSize: 14, opacity: 0.6 }}>{publish_date || 'Not specified'} </Text>

            <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Created Date </Text>
            <Text style={{ fontSize: 14, opacity: 0.6 }}>{created['value'] || 'Not specified'} </Text>



            <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Latest Revision </Text>
            <Text style={{ fontSize: 14, opacity: 0.6 }}>{latest_revision || 'Not specified'} </Text>

            <Text style={{ fontWeight: 'bold', fontSize: 16 }}>ISBN </Text>

            {isbn_13.map(isbn => {
                return <Text style={{ fontSize: 14, opacity: 0.6 }}>{isbn || 'Not specified'} </Text>

            })}

        </ScrollView>
    )
}
export default BookDetails;