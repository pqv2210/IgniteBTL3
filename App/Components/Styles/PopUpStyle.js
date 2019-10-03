// Copyright (c) 2019-present vantuan88291, Personal. All Rights Reserved.
import {StyleSheet, Dimensions} from 'react-native'

const {height, width} = Dimensions.get('screen')

export default StyleSheet.create({
  box: {
    height: height / 3.5,
    width: width / 1.13,
    borderRadius: 15,
    marginTop: height / 1.6,
    backgroundColor: '#ffffff',
    position: 'absolute',
  },
  boxInfo: {
    height: height / 8.5,
    width: width / 1.13,
    flexDirection: 'row',
    alignItems: 'center',
  },
  boxAvatar: {
    height: width / 7,
    width: width / 7,
    borderRadius: width / 14,
    borderWidth: 1,
    margin: 10,
  },
  boxNameAge: {
    height: width / 6,
    width: width / 2.45,
    margin: 5,
    justifyContent: 'center',
  },
  name: {
    fontSize: 20,
    color: '#000000',
  },
  age: {
    fontSize: 13,
    color: '#232323',
  },
  touchFollow: {
    height: height / 17,
    width: width / 4.4,
    backgroundColor: '#F2296F',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textfollow: {
    fontSize: 16,
    color: '#ffffff',
  },
  pic: {
    height: height / 6,
    width: width / 1.13,
    alignItems: 'center',
    justifyContent: 'center',
  },
  picture: {
    height: height / 6.2,
    width: width / 2,
  },
})
