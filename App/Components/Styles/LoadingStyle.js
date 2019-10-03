// Copyright (c) 2019-present vantuan88291, Personal. All Rights Reserved.
import {StyleSheet, Dimensions} from 'react-native'

const {height, width} = Dimensions.get('screen')

export default StyleSheet.create({
  container: {
    height,
    width,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
