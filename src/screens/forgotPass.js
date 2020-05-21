import React from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';

import {connect} from 'react-redux';
import {emailForgotPassTextBox, saveForgotPassData} from '../actions';

import colors from '../res/colors';
import NavigationService from '../route/navigationService';

class ForgotPass extends React.Component {
  render() {
    return (
      <View style={styles.container}>

      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    forgotPass: state.forgotPass,
  };
}

export default connect(
  mapStateToProps,
  {
    emailForgotPassTextBox,
    saveForgotPassData,
  },
)(ForgotPass);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  textInput: {
    color: 'rgba(34,41,47,1)',
    paddingVertical: 12,
    fontSize: 12,
    color: colors.grayDarkest,
    fontFamily: 'Butler-SemiBold',
  },
});
