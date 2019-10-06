// Copyright (c) 2019-present vantuan88291, Personal. All Rights Reserved.
import {Dimensions, StyleSheet} from 'react-native'

const {height, width} = Dimensions.get('screen')

export default StyleSheet.create({
  imgBg: {
    width,
    height,
  },
  header: {
    alignItems: 'center',
    width,
    marginVertical: 63,
  },
  origamibird: {
    width: 96,
    height: 79,
  },
  viewPath: {
    alignItems: 'center',
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
  touchSignUp: {
    borderRadius: 30,
    height: 55,
    width: 140,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: height / 16,
    backgroundColor: '#5591ff',
  },
  textSignUp: {
    fontSize: 18,
    color: '#ffffff',
  },
  viewBack: {
    marginLeft: 20,
    marginTop: 20,
  },
  touchBack: {
    position: 'absolute',
  },
  imgCircle: {
    width: 52,
    height: 52,
  },
  imgArrow: {
    width: 18,
    height: 16,
    marginTop: 14,
    marginLeft: 16,
  },
})
