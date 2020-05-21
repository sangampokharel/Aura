import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';
import { Feather } from '../../res/icons/index'
const LastViewCard = ({ data }) => {
    return (
        <View style={styles.cardContainer}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: data.imageURL }} resizeMode="cover" style={{ borderTopLeftRadius: 10, borderBottomLeftRadius: 10, height: 150 }} />
            </View>
            <View style={styles.textContainer}>
                <View style={styles.iconsTextContainer}>
                    <Text>{data.category}</Text>
                    <View style={styles.iconsContainer}>
                        <Feather name="send" size={18} style={styles.iconStyle} />
                        <Feather name="heart" size={18} />
                    </View>
                </View>
                <Text style={styles.textHeaderStyle}>{data.title}</Text>
                <Text style={styles.textSubtitleStyle}>{data.desc}</Text>
                <Text style={styles.textAuthorStyle}>{data.author}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10,
        marginHorizontal: 10,
        elevation: 5,
        marginVertical: 10,
        maxHeight: 150
    },

    iconsTextContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    iconStyle: {
        marginHorizontal: 14
    },
    iconsContainer: {
        flexDirection: 'row',
        padding: 2

    },
    imageContainer: {
        flex: 1
    },

    textHeaderStyle: {
        fontSize: 18,
        fontWeight: '800',
        marginTop: 8,
    },

    textSubtitleStyle: {
        color: '#666',
        marginTop: 2,
        fontWeight: '600'
    },

    textContainer: {
        flex: 2,
        marginTop: 8,
        marginHorizontal: 8
    },

    textAuthorStyle: {
        color: '#666',
        marginTop: 6,
        marginBottom: 8,
    }

})

export default LastViewCard
