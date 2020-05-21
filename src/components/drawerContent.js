'use strict';
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
  Switch,
} from 'react-native';
import {DrawerItems} from 'react-navigation-drawer';
import AsyncStorage from '@react-native-community/async-storage';

import {connect} from 'react-redux';
import {logoutDialog} from '../actions';

import NavigationService from '../route/navigationService';
import colors from '../res/colors';

class DrawerContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      darkModeStatus: false,
    };
  }
  render() {
    return (
      <View style={{flex: 1}}>


      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    drawerContent: state.drawerContent,
  };
}

export default connect(
  mapStateToProps,
  {logoutDialog},
)(DrawerContent);

const styles = StyleSheet.create({
  buttonText: {
    fontFamily: 'Butler-SemiBold',
    color: colors.blackLight,
    fontSize: 12,
    marginLeft: 16,
  },
  buttonFocusedText: {
    fontFamily: 'Butler-SemiBold',
    color: colors.primaryDark,
    fontSize: 12,
    marginLeft: 16,
  },
  loggedInHeader: {
    paddingTop: 26,
    height: 70,
    justifyContent: 'center',
  },
  loggedOutHeader: {
    paddingTop: 26,
    height: 176,
    justifyContent: 'center',
  },
});
