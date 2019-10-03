// Copyright (c) 2019-present vantuan88291, Personal. All Rights Reserved.
import React from 'react'
import {View} from 'react-native'
import Spinner from 'react-native-spinkit'
import styles from './Styles/ViewLoadingStyle'

const viewLoading = (
  <View style={styles.spinner}>
    <Spinner
      size={30}
      type='Circle'
      color='#ffffff'
    />
  </View>
)

export default viewLoading
