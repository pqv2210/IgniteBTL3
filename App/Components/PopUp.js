// Copyright (c) 2019-present vantuan88291, Personal. All Rights Reserved.
import React, {Component} from 'react'
import {View, Text, Image, TouchableOpacity} from 'react-native'
import styles from './Styles/PopUpStyle'

export default class PopUp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      marker: '',
    }
  }

  getDataToPopUp = () => {
    this.props.getDataToPopUp(this.props.marker)
  }

  render() {
    const {marker} = this.props
    return (
      <View style={styles.box}>
        <View style={styles.boxInfo}>
          <Image
            style={styles.boxAvatar}
            source={{uri: marker.url_avatar}}
          />
          <View style={styles.boxNameAge}>
            <Text style={styles.name}>{marker.fullname}</Text>
            <Text style={styles.age}>{marker.truck_model}</Text>
          </View>
          <TouchableOpacity
            style={styles.touchFollow}
            onPress={this.getDataToPopUp}
          >
            <Text style={styles.textfollow}>Follow</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.pic}>
          <Image
            style={styles.picture}
            source={require('../Images/download.jpeg')}
          />
        </View>
      </View>
    )
  }
}
