import React from 'react';
import { StyleSheet, View, ImageBackground, Text, Image } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import NavigationService from '../route/navigationService';
import { WaveIndicator } from 'react-native-indicators';

import { connect } from 'react-redux';
import { fetchAllDataSplashScreen } from '../actions';

import Images from '../res/images';
import colors from '../res/colors';

class SplashScreen extends React.Component {
  componentDidMount() {
    AsyncStorage.getItem('KeyAccessToken').then(accessToken => {
      global.accessToken = accessToken;
    });

    AsyncStorage.getItem('KeyRefreshToken').then(refreshToken => {
      global.refreshToken = refreshToken;
    });

    AsyncStorage.getItem('KeyUserInfo').then(userInfo => {
      global.userInfo = JSON.parse(userInfo);
      setTimeout(() => {
        if (global.userInfo != null) {
          // NavigationService.navigateReset('DashboardRoute');
          NavigationService.navigate('DashboardRoute')
        } else {
          NavigationService.navigate('LoginStack');
        }
      }, 2000);
    });
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: colors.background }}>
        <Text
          style={{
            fontSize: 28,
            color: colors.grayMedium,
            fontFamily: 'Butler-Bold',
            marginTop: 100,
            marginLeft: 25,
          }}>
          Let's Fashion,
        </Text>
        <View style={styles.logo}>
          <Image
            style={styles.imageStyle}
            source={Images.logo}
            resizeMode="contain"
          />
          <Text
            style={{
              width: 150,
              fontSize: 12,
              color: colors.grayMedium,
              fontFamily: 'Butler-Regular',
              marginTop: 20,
              textAlign: 'center',
              lineHeight: 18,
            }}>
            A simple, fun and creative way to fashion.
          </Text>
        </View>
        <WaveIndicator
          color={colors.primaryDark}
          size={50}
          style={{ marginTop: 200 }}
          waveFactor={0.7}
          waveMode="outline"
        />
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}>
          <Image
            style={{
              width: global.screenWidth,
              height: 150,
            }}
            source={Images.banner}
            resizeMode="cover"
          />
        </View>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    splashScreen: state.splashScreen,
  };
}

export default connect(
  mapStateToProps,
  { fetchAllDataSplashScreen },
)(SplashScreen);

const styles = StyleSheet.create({
  logo: {
    flex: 1,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyle: {
    width: 250,
    height: 120,
  },
});
