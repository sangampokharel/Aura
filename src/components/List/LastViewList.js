import React from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import LastViewCard from '../Cards/LastViewCard';
import { SafeAreaView } from 'react-native-safe-area-context';
const DATA = [
    {
        id: '1',
        category: 'Luxury',
        title: 'Online Sales? May be Oneday, Says Chanel',
        desc: 'The french fashion house remains one of the most last holds out',
        imageURL: 'https://kidlit.com/wp-content/uploads/2013/01/writing-conferences-what-to-bring-to-a-writers-conference-HIZTHG1A3T.jpg',
        author: 'By Megan Doyle',

    },
    {
        id: '2',
        category: 'Luxury',
        title: 'Business Industry',
        desc: 'Why Fasion Cant forget its Refrences',
        imageURL: 'https://kidlit.com/wp-content/uploads/2013/01/writing-conferences-what-to-bring-to-a-writers-conference-HIZTHG1A3T.jpg',
        author: 'By Megan Doyle',


    },
]
const ListViewList = ({ title }) => {
    return <View style={styles.container}>
        <SafeAreaView >
            <FlatList
                data={DATA}
                keyExtractor={item => item.id}
                renderItem={({ item }) => {
                    return <View>
                        <LastViewCard data={item} />
                    </View>
                }}
                ListHeaderComponent={() => <Text style={styles.textStyle}>{title}</Text>
                }

            />
        </SafeAreaView>
    </View>
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 0,

    },
    textStyle: {
        marginHorizontal: 20,
        fontSize: 20,
        fontWeight: 'bold'

    }
});


export default ListViewList;