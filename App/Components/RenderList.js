// Copyright (c) 2019-present vantuan88291, Personal. All Rights Reserved.
import React, {Component} from 'react'
import {View, Image} from 'react-native'
import styles from './Styles/RenderListStyle'

export default class RenderList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      item: {},
    }
  }

  render() {
    return (
      <View style={styles.pic}>
        <Image
          source={{uri: this.props.item.url_img}}
          style={styles.picture}
        />
      </View>
    )
  }
}
