import React, {Component} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import RootScreen from './Containers/Root/RootScreen';
import 'react-native-gesture-handler';

export default class App extends Component {
  render() {
    return (
      <SafeAreaProvider>
        <RootScreen />
      </SafeAreaProvider>
    );
  }
}
