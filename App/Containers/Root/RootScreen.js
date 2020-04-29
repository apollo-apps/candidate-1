import React, {Component} from 'react';
import {View} from 'react-native';
import NavigationService from './../../Services/NavigationService';
import AppNavigator from './../../Navigators/AppNavigator';

import styles from './RootScreenStyle';

export default class RootScreen extends Component {
  componentDidMount() {}
  render() {
    return (
      <>
        <View style={styles.container}>
          <AppNavigator
            ref={(navigatorRef) => {
              NavigationService.setTopLevelNavigator(navigatorRef);
            }}
          />
        </View>
      </>
    );
  }
}
