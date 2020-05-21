import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import PropTypes from 'prop-types';

import colors from '../res/colors';

class AlertModal extends React.Component {
  render() {
    const {
      isVisible,
      type,
      title,
      body,
      but1,
      but2,
      animationIn,
      animationOut,
      but1Action,
      but2Action,
      animationInTiming,
      animationOutTiming,
    } = this.props;
    if (type == 'discard') {
      this.color = 'rgba(0,174,239,1)';
      this.iconColor = '#E0F3FC';
    } else if (type == 'internet') {
      this.color = 'rgba(253,161,95,1)';
      this.iconColor = 'rgba(253,161,95,0.1)';
    } else if (type == 'logout') {
      this.color = 'rgba(235,0,40,1)';
      this.iconColor = 'rgba(235,0,40,0.1)';
    }

    return (
      <Modal
        isVisible={isVisible}
        animationIn={animationIn}
        animationOut={animationOut}
        animationInTiming={animationInTiming}
        animationOutTiming={animationOutTiming}
        backdropOpacity={0.6}
        useNativeDriver={true}>
        <View style={styles.loading}>
          <View
            style={{
              borderRadius: 10,
              backgroundColor: colors.white,
              alignItems: 'center',
              justifyContent: 'center',
              padding: 32,
            }}>
            {type == 'discard' && (
              <View
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 24,
                  backgroundColor: this.iconColor,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>

              </View>
            )}

            {type == 'internet' && (
              <View
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 24,
                  backgroundColor: this.iconColor,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>

              </View>
            )}

            {type == 'logout' && (
              <View
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 24,
                  backgroundColor: this.iconColor,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>

              </View>
            )}

            <Text
              style={{
                color: '#121619',
                fontSize: 18,
                fontFamily: 'Butler-Bold',
                textAlign: 'center',
                marginTop: 16,
              }}>
              {title.toUpperCase()}
            </Text>

            <Text
              style={{
                color: '#667685',
                fontSize: 12,
                fontFamily: 'Butler-Regular',
                textAlign: 'center',
                marginTop: 8,
                lineHeight: 22,
              }}>
              {body}
            </Text>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: 16,
              }}>
              <TouchableOpacity
                onPress={but1Action}
                activeOpacity={0.75}
                style={{
                  flex: 1,
                  borderWidth: 1,
                  borderColor: colors.border,
                  borderRadius: 30,
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingVertical: 8,
                  marginRight: 8,
                }}>
                <Text
                  style={{
                    color: '#B2BAC2',
                    fontSize: 12,
                    fontFamily: 'Butler-Bold',
                    letterSpacing: 0.5,
                  }}>
                  {but1}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={but2Action}
                activeOpacity={0.75}
                style={{
                  flex: 1,
                  backgroundColor: this.color,
                  borderRadius: 30,
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingVertical: 8,
                  marginLeft: 8,
                }}>
                <Text
                  style={{
                    color: '#fff',
                    fontSize: 12,
                    fontFamily: 'Butler-Bold',
                    letterSpacing: 0.5,
                  }}>
                  {but2}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

AlertModal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  but1: PropTypes.string.isRequired,
  but2: PropTypes.string.isRequired,
  animationIn: PropTypes.string.isRequired,
  animationIn: PropTypes.string.isRequired,
  but1Action: PropTypes.func.isRequired,
  but2Action: PropTypes.func.isRequired,
  animationInTiming: PropTypes.number,
  animationOutTiming: PropTypes.number,
};

export default AlertModal;

const styles = StyleSheet.create({
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
});
