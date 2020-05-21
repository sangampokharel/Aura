import {NavigationActions, StackActions} from 'react-navigation';
import {DrawerActions} from 'react-navigation-drawer';

var navigator;

function setTopLevelNavigator(navigatorRef) {
  navigator = navigatorRef;
}

function navigate(routeName, params) {
  navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    }),
  );
}

function navigateReset(routeName, params) {
  navigator.dispatch(
    StackActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({
          routeName,
          params,
        }),
      ],
    }),
  );
}

function back(routeName) {
  navigator.dispatch(
    NavigationActions.back({
      key: routeName,
    }),
  );
}

function toggleDrawerBar(routeName) {
  navigator.dispatch(DrawerActions.toggleDrawer());
}

export default {
  navigate,
  navigateReset,
  back,
  toggleDrawerBar,
  setTopLevelNavigator,
};
