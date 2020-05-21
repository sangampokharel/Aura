import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import NavigationService from '../route/navigationService';

import Images from '../res/images';
import colors from '../res/colors';

import {connect} from 'react-redux';
import {
  nameOneTBCombine,
  nameTwoTBCombine,
  categoryDropdownText,
} from '../actions';

class Combine extends React.Component {
  render() {
    return (
      <View style={styles.container}>

      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    combine: state.combine,
  };
}

export default connect(
  mapStateToProps,
  {
    nameOneTBCombine,
    nameTwoTBCombine,
    categoryDropdownText,
  },
)(Combine);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
