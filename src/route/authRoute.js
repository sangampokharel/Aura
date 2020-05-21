'use strict';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator, TransitionPresets} from 'react-navigation-stack';

import SplashScreen from '../screens/splashScreen';
import Welcome from '../screens/welcome';
import Login from '../screens/login';
import Signup from '../screens/signup';
import DashboardRoute from './dashboardRoute';
import ForgotPass from '../screens/forgotPass';

const LoginStackNavigator = createStackNavigator(
  {
    Welcome: {
      screen: Welcome,
      navigationOptions: {
        headerShown: false,
      },
    },
    Login: {
      screen: Login,
      navigationOptions: {
        headerShown: false,
      },
    },
    Signup: {
      screen: Signup,
      navigationOptions: {
        headerShown: false,
      },
    },
    ForgotPass: {
      screen: ForgotPass,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    initialRouteName: 'Welcome',
    defaultNavigationOptions: {
      ...TransitionPresets.SlideFromRightIOS,
    },
  },
);

const AppNavigator = createStackNavigator(
  {
    SplashScreen: {
      screen: SplashScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    LoginStack: {
      screen: LoginStackNavigator,
      navigationOptions: {
        headerShown: false,
      },
    },
    DashboardRoute: {
      screen: DashboardRoute,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    initialRouteName: 'SplashScreen',
    defaultNavigationOptions: {
      ...TransitionPresets.SlideFromRightIOS,
    },
  },
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
