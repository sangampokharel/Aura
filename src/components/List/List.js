import React from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import Cards from '../Cards/Cards';
import { SafeAreaView } from 'react-native-safe-area-context';

const DATA = [
    {
        id: '1',
        title: 'Business Industry',
        desc: 'Why Fasion Cant forget its Refrences',
        imageURL: 'https://kidlit.com/wp-content/uploads/2013/01/writing-conferences-what-to-bring-to-a-writers-conference-HIZTHG1A3T.jpg',
        author: 'By Megan Doyle',
        time: '2 days ago'
    },
    {
        id: '2',
        title: 'Business Industry',
        desc: 'Why Fasion Cant forget its Refrences',
        imageURL: 'https://kidlit.com/wp-content/uploads/2013/01/writing-conferences-what-to-bring-to-a-writers-conference-HIZTHG1A3T.jpg',
        author: 'By Megan Doyle',
        time: '2 days ago'

    },
]
const List = ({ horizontal, title }) => {
    return <View>
        <SafeAreaView style={{ flex: 1, }}>
            <FlatList
                horizontal={horizontal ? true : false}
                showsHorizontalScrollIndicator={horizontal && false}
                data={DATA}
                keyExtractor={item => item.id}
                renderItem={({ item }) => {
                    return <View>
                        <Cards data={item} />
                    </View>
                }}


            />
        </SafeAreaView>
    </View>
}

const styles = StyleSheet.create({

    textStyle: {
        marginHorizontal: 20,
        fontSize: 20,
        fontWeight: 'bold'

    }
});


export default List;