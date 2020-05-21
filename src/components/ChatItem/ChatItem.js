import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Avatar, Badge } from 'react-native-elements';


const ChatItem = ({ data }) => {
    return (

        <View style={styles.mainContainer}>

            <View style={styles.containerStyle}>
                <View style={styles.imageMessageStyle}>
                    <View>
                        <Avatar
                            rounded
                            avatarStyle={{ borderRadius: 50, }}
                            containerStyle={{ borderWidth: 4, width: 60, height: 60, borderRadius: 50, borderColor: '#666' }}
                            source={{ uri: 'https://kidlit.com/wp-content/uploads/2013/01/writing-conferences-what-to-bring-to-a-writers-conference-HIZTHG1A3T.jpg' }} />
                        <Badge
                            status="error"
                            value="33"
                            containerStyle={{ position: 'absolute', top: 45, right: -0 }}
                        />
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.nameStyle}>{data.name}</Text>
                        <Text style={styles.messageStyle}>{data.message}</Text>
                    </View>
                </View>
                <View>
                    <Text style={styles.timeStyle}>{data.time}</Text>
                </View>
            </View>

        </View>

    )
}

const styles = StyleSheet.create({
    mainContainer: {
        paddingVertical: 8,
        marginTop: 0,
    },

    containerStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 30,
        alignItems: 'center'

    },

    nameStyle: {
        fontWeight: '300',
        fontSize: 18,
        marginBottom: 8
    },
    messageStyle: {
        fontSize: 13,
        color: '#666'
    },
    timeStyle: {
        color: '#666',

    },
    textContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        marginHorizontal: 20,
        // marginBottom: 30
    },

    imageMessageStyle: {
        flexDirection: 'row',

    }

});

export default ChatItem;