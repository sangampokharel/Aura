import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import Header from '../components/Header/Header'
const SettingsScreen = () => {
    return (
        <View style={styles.container}>
            <Header title="Aura" />
            <View style={styles.buttonStyle} >
                <Button title="Logout" /></View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
    },

    buttonStyle: {
        marginHorizontal: 30,
        marginVertical: 50

    }

})

export default SettingsScreen
