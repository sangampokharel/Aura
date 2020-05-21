import React from 'react';
import {
  StyleSheet,
  ImageBackground,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Button
} from 'react-native';

import { connect } from 'react-redux';
import {
  emailLoginTextBox,
  passwordLoginTextBox,
  saveLoginData,
} from '../actions';

import colors from '../res/colors';
import { Feather } from '../res/icons';
import Images from '../res/images';
import PNGLoadingIndicator from '../components/pngActivityIndicator';
import NavigationService from '../route/navigationService';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      passwordShow: false,
    };
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ImageBackground source={Images.aura11} style={styles.container}>
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

          <Text
            style={{
              fontSize: 60,
              color: colors.white,
              fontFamily: 'Butler-Bold',
              textAlign: 'center',
              letterSpacing: 3,
            }}>
            Aura
          </Text>

          <View
            style={{
              marginHorizontal: 50,
            }}>
            <TextInput
              underlineColorAndroid="transparent"
              placeholder="Email"
              placeholderTextColor={colors.white}
              style={styles.textInput}
              value={this.props.login.email}
              onChangeText={text => this.props.emailLoginTextBox(text)}
              autoCapitalize="none"
              autoCorrect={false}
              returnKeyType="next"
            />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 20,
                backgroundColor: 'rgba(220,220,220,0.2)',
                borderRadius: 5,
              }}>
              <TextInput
                underlineColorAndroid="transparent"
                placeholder="Password"
                placeholderTextColor={colors.white}
                style={{
                  flex: 1,
                  color: 'rgba(34,41,47,1)',
                  paddingVertical: 12,
                  fontSize: 14,
                  color: colors.white,
                  fontFamily: 'Butler-SemiBold',
                  paddingLeft: 20,
                }}
                value={this.props.login.password}
                onChangeText={text => this.props.passwordLoginTextBox(text)}
                autoCapitalize="none"
                secureTextEntry={!this.state.passwordShow}
                autoCorrect={false}
                returnKeyType="next"
              />
              <TouchableOpacity
                activeOpacity={0.75}
                onPress={() => {
                  this.setState({ passwordShow: !this.state.passwordShow });
                }}
                style={{ marginTop: -5 }}>
                {this.state.passwordShow ? (
                  <Feather
                    name="eye"
                    size={20}
                    color={colors.textLight}
                    style={{ paddingHorizontal: 12 }}
                  />
                ) : (
                    <Feather
                      name="eye-off"
                      size={20}
                      color={colors.textLight}
                      style={{ paddingHorizontal: 12 }}
                    />
                  )}
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              activeOpacity={0.75}
              onPress={() => {
                this.setState({ passwordShow: !this.state.passwordShow });
              }}
              style={{
                marginTop: -5,
                backgroundColor: 'black',
                borderRadius: 5,
              }}>
              {this.state.passwordShow ? (
                <Feather
                  name="eye"
                  size={20}
                  color={colors.textLight}
                  style={{ paddingHorizontal: 12 }}
                />
              ) : (
                  <Feather
                    name="eye-off"
                    size={20}
                    color={colors.textLight}
                    style={{ paddingHorizontal: 12 }}
                  />
                )}
            </TouchableOpacity>

            <Button
              title="Login"
              // onPress={() => NavigationService.navigate('HomeStack')}
              onPress={() => this.props.navigation.navigate('DashboardRoute')}
            />

          </View>
        </ImageBackground>
      </View>
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
    width: '100%',
    height: '100%',
  },
  textInput: {
    color: 'rgba(34,41,47,1)',
    paddingVertical: 12,
    fontSize: 14,
    color: colors.white,
    fontFamily: 'Butler-SemiBold',
    backgroundColor: 'rgba(220,220,220,0.2)',
    borderRadius: 5,
    paddingLeft: 20,
  },
});
