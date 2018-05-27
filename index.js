/**
 * Created by jkwu on 2018/5/25.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  Dimensions
} from 'react-native';
const WINDOW_HEIGHT = Dimensions.get('window').height;
const WINDOW_EIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
  positionTop: {
    top: 0,
  },
  positionCenter: {
    top: Number.parseInt(WINDOW_HEIGHT / 2)
  },
  positionBottom: {
    bottom: 0
  }
});

export default class buttonGroup extends Component {
  static propTypes = {
    position: PropTypes.oneOf(['top', 'center', 'bottom']),
    isFLoat: PropTypes.bool,
  };

  static defaultProps = {
    position: 'bottom',
    isFLoat: false
  };

  render() {
    const { children, position, isFLoat, style } = this.props;
    if (isFLoat) {
      // if isFLoat is ture,change position
      let positionStyle = styles.positionTop;
      if (position === 'top') {
        positionStyle = styles.positionTop;
      } else if (position === 'center') {
        positionStyle = styles.positionCenter;
      } else if (position === 'bottom') {
        positionStyle = styles.positionBottom;
      }

      return (
        <View
          style={[{
            padding: 5,
            width: WINDOW_EIDTH,
            backgroundColor: '#fff',
            flexDirection: 'row',
            justifyContent: 'space-between',
            position: 'absolute'
          },
            positionStyle,
            style
          ]}
        >
          {children}
        </View>
      );
    }

    // if isFLoat is not ture,change position,note: default false
    return (
      <View
        style={[{
          padding: 5,
          width: WINDOW_EIDTH,
          backgroundColor: '#fff',
          flexDirection: 'row',
          justifyContent: 'space-between'
        },
          style
        ]}
      >
        {children}
      </View>
    );
  }
}
