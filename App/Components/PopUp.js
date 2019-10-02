// Copyright (c) 2019-present vantuan88291, Personal. All Rights Reserved.
import React, {Component} from 'react'
import {View, Text, Image, TouchableOpacity} from 'react-native'
import styles from '../Containers/Styles/MainScreenStyle'

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
    return (
      <View style={styles.box}>
        <View style={styles.boxInfo}>
          <Image
            style={styles.boxAvatar}
            source={{uri: this.props.marker.url_avatar}}
          />
          <View style={styles.boxNameAge}>
            <Text style={styles.name}>{this.props.marker.fullname}</Text>
            <Text style={styles.age}>{this.props.marker.age}</Text>
          </View>
          <TouchableOpacity
            style={styles.touchFollow}
            onPress={this.getDataToPopUp}
          >
            <Text style={styles.textfollow}>Follow</Text>
          </TouchableOpacity>
        </View>
        <Image
          style={styles.picture}
        />
      </View>
    )
  }
}
