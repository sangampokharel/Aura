import React from 'react';
import { StyleSheet, View } from 'react-native';
import Search from '../components/Search/Search';
import Header from '../components/Header/Header'
// import { connect } from 'react-redux';
// import { nameMeaningTextbox } from '../actions';

// import NavigationService from '../route/navigationService';
// import colors from '../res/colors';
const SearchScreen = () => {
  return <View style={styles.container}>
    <Header title="Aura" />
    <Search />
  </View>
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1
  }
});

export default SearchScreen;
