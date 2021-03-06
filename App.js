/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { Button, Toast, Modal } from 'antd-mobile-rn';

import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export class Home extends Component<Props> {
  render() {
      return (
          <View style={styles.container}>
              <Text>首页</Text>
              <Icon name="ios-home" size={24} />
          </View>
      );
  }
}

export class Settings extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <Text>设置</Text>
                <Icon name="ios-settings" size={24} />
            </View>
        );
    }
}

const AppNavigator = createBottomTabNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            tabBarLabel: '首页',
            tabBarIcon: ({ tintColor }) => <Icon name="ios-home" color={tintColor} size={24} />
        }
    },
    Settings: {
        screen: Settings,
        navigationOptions: {
            tabBarLabel: '设置',
            tabBarIcon: ({ tintColor }) => <Icon name="ios-settings" color={tintColor} size={24} />
        }
    }
}, {
    tabBarOptions: {
        showIcon: true,
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
    }
})

export default createAppContainer(AppNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
//
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
// });

