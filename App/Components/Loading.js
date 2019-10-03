// Copyright (c) 2019-present vantuan88291, Personal. All Rights Reserved.
import React, {Component} from 'react'
import {View} from 'react-native'
import styles from './Styles/LoadingStyle'
import Spinner from 'react-native-spinkit'

export default class Loading extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Spinner
          size={50}
          type='Bounce'
          color='#FF1B19'
        />
      </View>
    )
  }
}
