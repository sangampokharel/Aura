import React from 'react';
import {
  StyleSheet,
  ImageBackground,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import {connect} from 'react-redux';
import {
  emailLoginTextBox,
  passwordLoginTextBox,
  saveLoginData,
} from '../actions';

import colors from '../res/colors';
import Images from '../res/images';
import PNGLoadingIndicator from '../components/pngActivityIndicator';
import NavigationService from '../route/navigationService';

class Login extends React.Component {
  render() {
    return (
      <ImageBackground source={Images.aura10} style={styles.container}>
        <PNGLoadingIndicator isVisible={this.props.login.loading} />

        <View
          style={{
            flex: 1,
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(0,0,0,0.65)',
          }}
        />
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: -global.screenHeight / 2.5,
          }}>
          <Text
            style={{
              fontSize: 60,
              color: colors.white,
              fontFamily: 'Butler-Bold',
              textAlign: 'center',
              letterSpacing: 3
            }}>
            Aura
          </Text>
          <Text
            style={{
              fontSize: 16,
              color: colors.grayLightest,
              fontFamily: 'Butler-Regular',
              marginTop: 12,
              textAlign: 'center',
            }}>
            Now you can choose
          </Text>
        </View>

        <View
          style={{
            flex: 1,
            position: 'absolute',
            bottom: 20,
            left: 0,
            right: 0,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            activeOpacity={0.75}
            onPress={() => {
              NavigationService.navigate('Signup');
            }}
            style={{paddingHorizontal: 30, paddingVertical: 20}}>
            <Text
              style={{
                fontSize: 16,
                color: colors.white,
                fontFamily: 'Butler-Bold',
                marginTop: 20,
                textAlign: 'center',
              }}>
              JOIN NOW
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.75}
            onPress={() => {
              NavigationService.navigate('Login');
            }}
            style={{paddingHorizontal: 30, paddingVertical: 20}}>
            <Text
              style={{
                fontSize: 16,
                color: colors.white,
                fontFamily: 'Butler-Bold',
                marginTop: 20,
                textAlign: 'center',
              }}>
              SIGN IN
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

function mapStateToProps(state) {
  return {
    login: state.login,
  };
}

export default connect(
  mapStateToProps,
  {
    emailLoginTextBox,
    passwordLoginTextBox,
    saveLoginData,
  },
)(Login);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  textInput: {
    color: 'rgba(34,41,47,1)',
    marginTop: 30,
    paddingVertical: 12,
    fontSize: 12,
    color: colors.grayDarkest,
    fontFamily: 'Butler-SemiBold',
  },
});
