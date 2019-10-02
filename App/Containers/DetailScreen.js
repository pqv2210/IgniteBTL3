// Copyright (c) 2019-present vantuan88291, Personal. All Rights Reserved.
import React, {Component} from 'react'
import {View, Image, Text, TouchableOpacity, FlatList} from 'react-native'
import {connect} from 'react-redux'

import styles from './Styles/DetailScreenStyle'

class DetailScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      marker: {},
    }
  }

  componentDidMount() {
    const marker = this.props.navigation.getParam('marker', 'NO-ID')
    this.setState({marker})
  }

  render() {
    const {marker} = this.state
    return (
      <View style={styles.container}>
        <Image
          style={styles.imgAvatar}
          source={{uri: marker.url_avatar}}
        />
        <View style={styles.box}>
          <View style={styles.boxInfo}>
            <View style={styles.boxInfoName}>
              <Text style={styles.textName}>{marker.fullname}</Text>
              <Text style={styles.textbks}>{marker.bien_kiem_soat}</Text>
            </View>
            <View style={styles.boxInfoIndex}>
              <View style={styles.indexBigView}>
                <View style={styles.indexView}>
                  <Text style={styles.indexText}>1000</Text>
                  <Text style={styles.indexText}>Followers</Text>
                </View>
                <View style={styles.indexView}>
                  <Text style={styles.indexText}>2019</Text>
                  <Text style={styles.indexText}>Following</Text>
                </View>
                <View style={styles.indexView}>
                  <Text style={styles.indexText}>10</Text>
                  <Text style={styles.indexText}>Shots</Text>
                </View>
              </View>
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
