'use strict';
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator, TransitionPresets } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs'
// import { createDrawerNavigator } from 'react-navigation-drawer';

import ExploreDetailsScreen from '../screens/DetailsScreen/ExploreDetailsScreen';

import {
  MessageScreen,
  ExploreScreen,
  LoveScreen,
  SettingsScreen,
  SearchScreen,
  ChatScreen

} from '../screens/ScreenExports'
import NewsDetail from '../screens/newsDetail';
import DrawerContent from '../components/drawerContent';
import colors from '../res/colors';
import { MaterialCommunityIcons, FontAwesome, Octicons } from '../res/icons/index'


const messageChat = createStackNavigator({
  Messages: {
    screen: MessageScreen,
    navigationOptions: {
      headerShown: false
    }
  },


  Chat: ChatScreen
}, {
  initialRouteName: 'Messages',

});


const TabNavigator = createBottomTabNavigator({


  Explore: {
    screen: ExploreScreen,
    navigationOptions: {
      tintColor: '#000',
      tabBarIcon: ({ tintColor }) => (
        <Octicons name="home" style={{ color: tintColor }} size={23} />
      )
    }

  },

  Message: {

    screen: messageChat,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <MaterialCommunityIcons name="message-text" style={{ color: tintColor }} size={23} />
    }

  },
  Search: {
    screen: SearchScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <FontAwesome name="search" style={{ color: tintColor }} size={23} />
    }
  },

  Love: {
    screen: LoveScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <FontAwesome name="heart" style={{ color: tintColor }} size={23} />
    }
  },


  Settings: {
    screen: SettingsScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <Octicons name="settings" style={{ color: tintColor }} size={30} />
    }
  }

}, {
  initialRouteName: 'Explore',
  defaultNavigationOptions: {
    tabBarOptions: {
      showLabel: false,
      showIcon: true,
      tintColor: '#000',
      activeTintColor: '#000',
    },
  }
});


const Stacknavigator = createStackNavigator({
  mainScreen: {
    screen: TabNavigator,


  },
  NewsDetail: {
    screen: NewsDetail,
    navigationOptions: {
      headerShown: false,
    },
  },
}, {
  initialRouteName: 'mainScreen',
  defaultNavigationOptions: {
    headerShown: false
  }

});

// const DrawerNavigator = createDrawerNavigator(
//   {
//     HomeStack: {
//       screen: TabNavigator,
//       navigationOptions: {
//         drawerLabel: 'Home',
//       },
//     },
//   },

//   {
//     contentComponent: DrawerContent,
//     initialRouteName: 'HomeStack',
//     edgeWidth: 50,
//     drawerWidth: '80%',
//     drawerPosition: 'left',
//     gesturesEnabled: false,
//     headerMode: 'float',
//     contentOptions: {
//       activeBackgroundColor: 'white',
//       itemsContainerStyle: {
//         paddingTop: 0,
//       },
//     },
//   },
// );


const Navigator = createAppContainer(Stacknavigator);

export default Navigator;

