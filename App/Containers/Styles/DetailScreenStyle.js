// Copyright (c) 2019-present vantuan88291, Personal. All Rights Reserved.
import {StyleSheet, Dimensions} from 'react-native'

const {height, width} = Dimensions.get('screen')

export default StyleSheet.create({
  container: {
    height,
    width,
  },
  boxAvatar: {
    width,
    height: height / 2.4,
    backgroundColor: '#d9fed8',
  },
  imgAvatar: {
    width,
    height: height / 3,
    borderWidth: 1,
  },
  box: {
    alignItems: 'center',
    height: height / 1.97,
    width,
  },
  boxInfo: {
    borderRadius: 5,
    height: height / 3.5,
    width: width / 1.35,
    marginTop: -height / 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.30,
    elevation: 13,
  },
  boxInfoName: {
    height: height / 8,
    width: width / 1.35,
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  boxInfoIndex: {
    height: height / 6.3,
    width: width / 1.35,
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
  },
  touchFollow: {
    alignItems: 'center',
    justifyContent: 'center',
    height: height / 15,
    width: width / 2.7,
    borderRadius: 5,
    marginTop: width / 5.8,
    backgroundColor: '#3AA593',
  },
  textFollow: {
    fontSize: 20,
    color: '#ffffff',
  },
  boxRecent: {
    marginTop: 20,
    height: height / 4.8,
    width: width / 1.2,
    position: 'absolute',
    bottom: 0,
    left: width / 14,
  },
  textRecent: {
    fontSize: 18,
    color: '#000000',
  },
})
