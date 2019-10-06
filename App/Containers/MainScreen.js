// Copyright (c) 2019-present vantuan88291, Personal. All Rights Reserved.
import React, {Component} from 'react'
import {View, Text, TouchableOpacity, Image, AsyncStorage, Alert} from 'react-native'
import {connect} from 'react-redux'
import MapView, {Marker} from 'react-native-maps'
import Loading from '../Components/Loading'
import styles from './Styles/MainScreenStyle'
import {MainTypes} from '../Redux/MainRedux'
import {NavigationActions, StackActions} from 'react-navigation'
import PopUp from '../Components/PopUp'

const resetAction = StackActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({routeName: 'LoginScreen'})],
})

class MainScreen extends Component {
  constructor(props) {
    super(props)
    this.map = null
    this.state = {
      isLoading: true,
      data: '',
      isShow: false,
      marker: {},
    }
  }

  async removeItem() {
    await AsyncStorage.removeItem('token')
    await AsyncStorage.removeItem('phone_number')
    await AsyncStorage.removeItem('password')
  }

  logOut = () => {
    Alert.alert(
      'Confirm',
      'Do you want log out?',
      [
        {
          text: 'OK',
          onPress: () => {
            this.removeItem()
            this.props.navigation.dispatch(resetAction)
          },
        },
        {
          text: 'Cancel',
        },
      ]
    )
  }

  static getDerivedStateFromProps(nextProps) {
    if (nextProps.payload.payload != null) {
      if (nextProps.payload.payload.status_code === 200) {
        return {
          isLoading: false,
          data: nextProps.payload.payload.data,
        }
      }
      if (nextProps.payload.payload.status_code === 401) {
        Alert.alert(
          '',
          nextProps.payload.payload.message,
          [
            {
              text: 'OK',
              onPress: async () => {
                nextProps.deletePayload(nextProps.payload.payload)
                await AsyncStorage.removeItem('token')
                nextProps.navigation.dispatch(resetAction)
              },
            },
          ]
        )
      }
    }
    return null
  }

  componentDidMount() {
    this.props.getList()
  }

  navigateToDetailScreen = (marker) => {
    this.props.navigation.navigate('DetailScreen', {marker})
  }

  showDetail = (marker) => {
    this.setState({
      isShow: true,
      marker,
    })
  }

  showMarker = (data) => {
    if (data != null) {
      return data.map((marker) =>
        (<Marker
          coordinate={{
            latitude: marker.lat,
            longitude: marker.lng,
          }}
          onPress={() => this.showDetail(marker)}
        >
          <TouchableOpacity style={styles.viewPoint}>
            <Image
              source={{uri: marker.url_avatar}}
              style={styles.markerAvatar}
            />
            <Text style={styles.markerName}>{marker.fullname}</Text>
          </TouchableOpacity>
        </Marker>
        ))
    }
    return null
  }

  hideDetail = () => {
    this.setState({
      isShow: false,
    })
  }

  fitMap = () => {
    const coordinates = this.data.map((item) => {
      const newData = []
      const newItem = {
        latitude: item.lat,
        longitude: item.lng,
      }
      newData.push(newItem)
      return newData
    })
    console.log(coordinates)
    if (this.map != null) {
      this.map.fitToCoordinates(
        coordinates,
        {edgePadding: {
          top: 10,
          right: 10,
          bottom: 10,
          left: 10},
        animated: false})
    }
  }

  // componentDidUpdate() {
  //   this.fitMap()
  // }

  render() {
    const {isLoading, data, marker} = this.state
    if (isLoading) {
      return (<Loading/>)
    }
    return (
      <View style={styles.container}>
        <MapView
          ref={(ref) => {
            this.map = ref
          }}
          style={styles.mapView}
          onPress={this.hideDetail}
        >
          {this.showMarker(data)}
        </MapView>
        <TouchableOpacity
          style={styles.touchLogOut}
          onPress={this.logOut}
        >
          <Image
            source={require('../Images/Login/logout.png')}
            style={styles.imgSignOut}
          />
        </TouchableOpacity>
        {this.state.isShow ?
          <PopUp
            marker={marker}
            getDataToPopUp={this.navigateToDetailScreen}
          /> : null}
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    payload: state.main,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getList: () => dispatch({
      type: MainTypes.MAIN_REQUEST,
    }),
    deletePayload: (payload) => dispatch({
      type: MainTypes.MAIN_DELETE_PAYLOAD,
      payload,
    }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen)
