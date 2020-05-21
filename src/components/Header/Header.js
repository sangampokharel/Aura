import React from 'react'
import { View, ImageBackground, Text, StyleSheet } from 'react-native';
const Header = ({ title }) => {
    return (
        <View style={{ elevation: 5, backgroundColor: 'rgba(52, 52, 52, 0.8)' }}>
            <ImageBackground source={{ uri: 'https://lh3.googleusercontent.com/rIHiSBrePQ20-QiCaF6Vs50h7t74X5XMvZROFOPASVXpwOwXAII-hAgFlCoXtV-pUcmk4A=s170' }} resizeMode="stretch" style={{ width: '100%', height: 60, }} >
                <Text style={styles.textStyle}>{title}</Text>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        textAlign: 'center',
        top: 10,
        fontSize: 30,
        color: "#fff",
        fontWeight: 'bold'

    }
})
export default Header
