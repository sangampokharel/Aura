import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './src/reducers';
import thunk from 'redux-thunk';
import {
  YellowBox,
  Alert,
  StatusBar,
  Dimensions,
  NativeModules,
  Platform,
} from 'react-native';

import AuthRoute from './src/route/authRoute';
import InternetConnectionCheck from './src/components/internetConnectionCheck';
import NavigationService from './src/route/navigationService';

class app extends React.Component {
  constructor(props) {
    super(props);

    YellowBox.ignoreWarnings([
      // 'Warning: `flexWrap: `wrap`` is not supported',
      // 'Warning: componentWillUpdate has been renamed',
      // 'Warning: componentWillReceiveProps has been renamed',
      // 'Warning: componentWillMount has been renamed',
      'VirtualizedLists should never be nested',
      // 'Warning: CheckBox has been extracted from',
    ]);

    global.host = 'https://dev.aura.com';

    global.screenWidth = Dimensions.get('window').width;
    global.screenHeight = Dimensions.get('window').height;
    global.statusBarHeight =
      Platform.OS === 'ios' ? 20 : NativeModules.StatusBarManager.HEIGHT;
  }

  render() {
    const store = createStore(reducers, applyMiddleware(thunk));

    return (
      <Provider store={store}>
        <StatusBar
          barStyle="light-content"
          translucent={true}
          backgroundColor="transparent"
        />

        <InternetConnectionCheck />

        <AuthRoute
          ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}
        />
      </Provider>
    );
  }
}

export default app;
