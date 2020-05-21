import React from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert } from 'react-native';
import Search from '../components/Search/Search';
import ChatItem from '../components/ChatItem/ChatItem';
import { Divider } from 'react-native-elements';
// import { SwipeListView } from 'react-native-swipe-list-view';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import Header from '../components/Header/Header'

const DATA = [
    {
        id: '1',
        profileImage: '',
        message: 'I love Aura App..its Great!!',
        name: 'Kamlesh',
        time: '7:08 PM'
    },
    {
        id: '2',
        profileImage: '',
        message: 'welcome to ReactNative....',
        name: 'Aby',
        time: '7:08 PM'
    },
    {
        id: '3',
        profileImage: '',
        message: 'Aura is the best App ever!!',
        name: 'Sangam',
        time: '7:08 PM'
    },
]
const MessageScreen = ({ navigation }) => {



    return (

        <View style={styles.container}>
            <Header title="Aura" />
            <Text style={styles.messageHeaderStyle}>Messages</Text>
            <Search />
            <FlatList
                style={{ marginTop: 30 }}
                data={DATA}
                keyExtractor={item => item.id}
                renderItem={({ item }) => {
                    return (
                        <Swipeable
                            renderLeftActions={() => <TouchableOpacity onPress={() => Alert.alert('Error', "Are you Sure?",
                                [{
                                    text: "Yes",
                                    onPress: () => console.log('Ok')

                                }, {
                                    text: "Cancel",
                                    onPress: () => console.log('Ok')

                                }], {
                                cancelable: true
                            })}
                                style={styles.deleteButtonStyle}><Text style={styles.deleteTextStyle}>Delete</Text></TouchableOpacity>}
                        >
                            <TouchableOpacity onPress={() => navigation.navigate('Chat')}>

                                <Divider style={{ backgroundColor: '#ccc', height: 1 }} />

                                <ChatItem data={item} />

                                <Divider style={{ backgroundColor: '#ccc', height: 1 }} />

                            </TouchableOpacity>
                        </Swipeable>
                    )

                }}




            />
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    messageHeaderStyle: {
        marginTop: 20,
        fontSize: 23,
        marginBottom: 0,
        marginHorizontal: 10,
        fontWeight: 'bold'
    },

    deleteButtonStyle: {
        backgroundColor: 'red',
        justifyContent: 'center',
        width: 80,
        alignItems: 'center'
    },
    deleteTextStyle: {
        color: '#fff',
        fontSize: 18,
    }

})

export default MessageScreen

