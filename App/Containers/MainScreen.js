// Copyright (c) 2019-present vantuan88291, Personal. All Rights Reserved.
import React, {Component} from 'react'
import {View, Text, TouchableOpacity, Image} from 'react-native'
import {connect} from 'react-redux'
import MapView from 'react-native-maps'

import styles from './Styles/MainScreenStyle'

class MainScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView style={styles.mapView}/>
        <TouchableOpacity
          style={styles.touch}
        >
          <Image
            source={require('../Images/Login/logout.png')}
            style={styles.imgSignOut}
          />
        </TouchableOpacity>
        <View style={styles.box}>
          <View style={styles.boxInfo}>
            <Image
              style={styles.boxAvatar}
              source={{uri: 'https://placeimg.com/140/140/any'}}
            />
            <View style={styles.boxNameAge}>
              <Text style={styles.name}>Clue</Text>
              <Text style={styles.age}>24 years old</Text>
            </View>
            <TouchableOpacity
              style={styles.touchFollow}
            >
              <Text style={styles.textfollow}>Follow</Text>
            </TouchableOpacity>
          </View>
          <Image
            style={styles.picture}
          />
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(null, null)(MainScreen)
