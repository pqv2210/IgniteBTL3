// Copyright (c) 2019-present vantuan88291, Personal. All Rights Reserved.
import {StyleSheet, Dimensions} from 'react-native'

const {height, width} = Dimensions.get('screen')

export default StyleSheet.create({
  imgBg: {
    width,
    height,
    alignItems: 'center',
  },
  origamibird: {
    width: 96,
    height: 79,
    marginVertical: 63,
  },
  path: {
    width: 319,
    height: 349,
    alignItems: 'center',
  },
  viewform: {
    justifyContent: 'center',
    marginTop: 45,
  },
  imguser: {
    width: 75,
    height: 75,
  },
  box: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconEmail: {
    width: 15,
    height: 19,
    margin: 5,
  },
  iconPass: {
    width: 16,
    height: 18,
    margin: 5,
  },
  textip: {
    height: height / 14,
    width: width / 1.5,
    fontSize: 18,
  },
  line: {
    width: width / 1.38,
  },
  touchForget: {
  },
  textForget: {
    marginLeft: width / 2.4,
    marginTop: 5,
    alignItems: 'flex-end',
  },
  message: {
    color: 'red',
    margin: 5,
  },
  viewLogin: {
    alignItems: 'center',
  },
  touchLogin: {
    borderRadius: 30,
    height: 55,
    width: 140,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -45,
    backgroundColor: '#5591ff',
  },
  textLogin: {
    fontSize: 18,
    color: '#ffffff',
  },
  touchSignUp: {
    marginTop: 30,
  },
  textSignUp: {
    fontSize: 18,
    color: '#5591ff',
  },
})
