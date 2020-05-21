import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import List from '../components/List/List'
import NavigationService from '../route/navigationService';
import colors from '../res/colors';
import ListViewList from '../components/List/LastViewList'
import Header from '../components/Header/Header'
const ExploreScreen = () => {

  return <View style={{ flex: 1 }}>
    <Header title="Aura" />


    <ScrollView style={styles.container}>

      <List horizontal title="New" />
      <ListViewList title="Latest News" />

    </ScrollView>
  </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default ExploreScreen;
