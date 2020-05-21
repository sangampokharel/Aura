import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import {connect} from 'react-redux';
import {
  emailSignupTextBox,
  firstNameSignupTextBox,
  lastNameSignupTextBox,
  passwordSignupTextBox,
  saveSignupData,
} from '../actions';

import colors from '../res/colors';
import PNGLoadingIndicator from '../components/pngActivityIndicator';
import NavigationService from '../route/navigationService';

class Signup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      male: true,
      female: false,
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <PNGLoadingIndicator isVisible={this.props.signup.loading} />

      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    signup: state.signup,
  };
}

export default connect(
  mapStateToProps,
  {
    emailSignupTextBox,
    firstNameSignupTextBox,
    lastNameSignupTextBox,
    passwordSignupTextBox,
    saveSignupData,
  },
)(Signup);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  textInput: {
    color: 'rgba(34,41,47,1)',
    marginTop: 25,
    paddingVertical: 12,
    fontSize: 12,
    color: colors.grayDarkest,
    fontFamily: 'Butler-SemiBold',
  },
});
