import React from 'react';
import NetInfo from '@react-native-community/netinfo';
import AlertModal from '../components/alertModal';

import {connect} from 'react-redux';
import {fetchAllSplashData} from '../actions';

import Images from '../res/images';
import colors from '../res/colors';

class InternetConnectionCheck extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      internetConnectionAlert: true,
    };

  }

  componentDidMount() {
    global.internetConnectionStatus = true;
    this.subscription = NetInfo.addEventListener(this.handleConnectivityChange);
  }

  handleConnectivityChange = (state: NetInfoState) => {
    global.internetConnectionStatus = state.isConnected;
    this.setState({internetConnectionAlert: state.isConnected});
    if (global.spalshScreenNoConnection && state.isConnected) {
      //this.props.fetchAllSplashData();
      global.spalshScreenNoConnection = false;
    }
  };
  componentWillUnmount() {
    this.subscription && this.subscription();
  }

  render() {
    return (
      <AlertModal
        isVisible={!this.state.internetConnectionAlert}
        type="internet"
        title="NO INTERNET"
        body="Sorry, we couldn't find your internet connection"
        but1="CANCEL"
        but2="TRY AGAIN"
        animationIn="bounceInDown"
        animationOut="bounceOutUp"
        animationInTiming={1600}
        animationOutTiming={1600}
        but1Action={() => {
          this.setState({internetConnectionAlert: true});
        }}
        but2Action={() => {
          this.setState({internetConnectionAlert: true});
        }}
      />
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
  {fetchAllSplashData},
)(InternetConnectionCheck);
