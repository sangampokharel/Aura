import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import LastViewList from '../components/List/LastViewList';
import Header from '../components/Header/Header'
import { ScrollView } from 'react-native-gesture-handler';
const LoveScreen = () => {
    return (
        <ScrollView style={styles.container}>
            <Header title="Aura" />
            <LastViewList
                title="Likes"
            />
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
})
export default LoveScreen
