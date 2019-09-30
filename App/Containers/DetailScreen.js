// Copyright (c) 2019-present vantuan88291, Personal. All Rights Reserved.
import React, {Component} from 'react'
import {View, Image, Text, TouchableOpacity, FlatList} from 'react-native'
import {connect} from 'react-redux'

import styles from './Styles/DetailScreenStyle'

class DetailScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.boxAvatar}>
          <Image
            style={styles.imgAvatar}
          />
        </View>
        <View style={styles.box}>
          <View style={styles.boxInfo}>
            <View style={styles.boxInfoName}>
              <Text>Name</Text>
            </View>
            <View style={styles.boxInfoIndex}>
              <Text>Index</Text>
              <TouchableOpacity
                style={styles.touchFollow}
              >
                <Text style={styles.textFollow}>+ Follow</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.boxRecent}>
            <Text style={styles.textRecent}>Recent shots</Text>
            <FlatList
              horizontal='true'
            />
          </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(DetailScreen)
