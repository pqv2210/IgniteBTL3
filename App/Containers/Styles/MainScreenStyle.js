// Copyright (c) 2019-present vantuan88291, Personal. All Rights Reserved.
import {StyleSheet, Dimensions} from 'react-native'

const {height, width} = Dimensions.get('screen')

export default StyleSheet.create({
  mapView: {
    height,
    width,
  },
  container: {
    position: 'absolute',
    alignItems: 'center',
    height,
    width,
  },
  touch: {
    position: 'absolute',
    height: 40,
    width: 40,
    margin: 20,
    left: 0,
  },
  imgSignOut: {
    height: 30,
    width: 30,
  },
  box: {
    height: height / 3.5,
    width: width / 1.13,
    borderRadius: 15,
    marginTop: height / 1.6,
    backgroundColor: '#ffffff',
    position: 'absolute',
  },
  boxInfo: {
    height: height / 7,
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
    color: '#000000',
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
  picture: {
    height: 60,
    width: 80,
    borderWidth: 1,
  },
})
