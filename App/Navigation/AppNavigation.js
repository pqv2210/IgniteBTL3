// Copyright (c) 2019-present vantuan88291, Personal. All Rights Reserved.
import {createStackNavigator, createAppContainer} from 'react-navigation'
import MainScreen from '../Containers/MainScreen'
import LoginScreen from '../Containers/LoginScreen'
import LaunchScreen from '../Containers/LaunchScreen'
import SignUpScreen from '../Containers/SignUpScreen'
import DetailScreen from '../Containers/DetailScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  MainScreen: {screen: MainScreen},
  LoginScreen: {screen: LoginScreen},
  LaunchScreen: {screen: LaunchScreen},
  SignUpScreen: {screen: SignUpScreen},
  DetailScreen: {screen: DetailScreen},
}, {

  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'LoginScreen',
  navigationOptions: {
    headerStyle: styles.header,
  },
})

export default createAppContainer(PrimaryNav)
