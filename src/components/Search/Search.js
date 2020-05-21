import React from 'react'
import { View, StyleSheet, TextInput, Text } from 'react-native';
import { Feather } from '../../res/icons/index'
const Search = () => {
    return (
        <View style={styles.searchContainer}>
            <Feather name="search" style={styles.iconStyle} />
            <TextInput

                style={styles.inputStyle}
                underlineColorAndroid="transparent" />
            <Text style={styles.textStyle}>SEARCH</Text>
        </View>
    )
}

const styles = StyleSheet.create({

    searchContainer: {
        marginHorizontal: 10,
        elevation: 2,
        marginTop: 10,
        flexDirection: 'row',
        borderWidth: 0.5,
        borderColor: '#eee',
        borderRadius: 5
    },

    iconStyle: {
        fontSize: 20,
        alignSelf: 'center',
        marginHorizontal: 15
    },

    inputStyle: {
        flex: 1,
        fontSize: 14,
        alignSelf: 'center',
    },

    textStyle: {
        fontSize: 14,
        alignSelf: 'center',
        marginHorizontal: 10
    }





});



export default Search
