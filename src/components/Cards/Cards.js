
import React from 'react'
import { View, StyleSheet, Text } from 'react-native';
import { Card } from 'react-native-elements'
const Cards = ({ data }) => {
    return (
        <View>
            <Card
                containerStyle={{ width: 300, elevation: 5 }}
                image={{ uri: data.imageURL }}
                imageStyle={{ width: '100%', height: 150 }}
            >
                <Text style={styles.textTitleStyle}>{data.title}</Text>
                <Text style={styles.textSubtitleStyle}>{data.desc}</Text>
                <Text style={styles.authorNameStyle}>{data.author}</Text>
                <Text style={styles.timeStyle}>{data.time}</Text>

            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    textTitleStyle: {
        fontSize: 16,
        fontWeight: 'bold',
    },

    textSubtitleStyle: {
        fontSize: 18,
        lineHeight: 25

    },

    authorNameStyle: {
        color: '#666',
        marginTop: 3
    },
    timeStyle: {
        color: '#666'
    }
})

export default Cards
