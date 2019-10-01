// Copyright (c) 2019-present vantuan88291, Personal. All Rights Reserved.
import React, {Component} from 'react'
import {ScrollView, Image, ImageBackground, View, TextInput, TouchableOpacity, Text, Alert, AsyncStorage} from 'react-native'
import {connect} from 'react-redux'
import {NavigationActions, StackActions} from 'react-navigation'
import styles from './Styles/LoginScreenStyle'
import {LoginTypes} from '../Redux/LoginRedux'

class LoginScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      phone_number: '',
      password: '',
      payload: '',
      isLoading: false,
      isChecking: false,
    }
  }

  getValueUsername = (text) => this.setState({phone_number: text})
  getValuePassword = (text) => this.setState({password: text})

  rememberUser = () => {
    AsyncStorage.setItem('phone_number', this.state.phone_number)
    AsyncStorage.setItem('password', this.state.password)
  }

  getremembedUser = async () => {
    const phone_number = await AsyncStorage.getItem('phone_number')
    const password = await AsyncStorage.getItem('password')
    await this.setState({phone_number, password})
  }

  navigateToMain = () => {
    const {payload} = this.state
    const data = {
      phone_number: this.state.phone_number,
      password: this.state.password,
      device_token: '1',
      device_os: '1',
      checkVersion: '1',
    }
    this.setState({
      isLoading: true,
      isChecking: true,
    })
    this.rememberUser()
    this.props.checkLogin(data)
    this.props.deletePayload(payload)
  }

  navigateToSignUp = () => {
    this.props.navigation.navigate('SignUpScreen')
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.payload.payload != null) {
      if (nextProps.payload.payload.status_code !== 200 && prevState.isChecking && nextProps.payload.payload.message) {
        Alert.alert(nextProps.payload.payload.message)
        return {
          isLoading: false,
          isChecking: false,
        }
      }
      if (nextProps.payload.payload.status_code === 200 && prevState.isChecking && nextProps.payload.payload.message) {
        AsyncStorage.setItem('token', nextProps.payload.payload.data.token)
        const resetAction = StackActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({routeName: 'MainScreen'})],
        })
        nextProps.navigation.dispatch(resetAction)
        return {
          isLoading: false,
          isChecking: false,
        }
      }
    }
    return null
  }

  componentDidMount() {
    this.getremembedUser()
  }

  render() {
    return (
      <ScrollView>
        <ImageBackground
          source={require('../Images/Login/BACKGROUND.png')}
          style={styles.imgBg}
        >
          <View style={styles.header}>
            <Image
              source={require('../Images/Login/origami-bird.png')}
              style={styles.origamibird}
            />
          </View>
          <View style={styles.viewPath}>
            <ImageBackground
              source={require('../Images/Login/Path.png')}
              style={styles.path}
            >
              <View style={styles.viewimguser}>
                <Image
                  source={require('../Images/Login/User.png')}
                  style={styles.imguser}
                />
              </View>
              <View style={styles.viewform}>
                <View style={styles.box}>
                  <Image
                    source={require('../Images/Login/Email.png')}
                    style={styles.iconEmail}
                  />
                  <TextInput
                    placeholder='Email Address'
                    style={styles.textip}
                    onChangeText={this.getValueUsername}
                    value={this.state.phone_number}
                  />
                </View>
                <Image
                  source={require('../Images/Login/Line.png')}
                  style={styles.line}
                />
                <View style={styles.box}>
                  <Image
                    source={require('../Images/Login/Pass.png')}
                    style={styles.iconPass}
                  />
                  <TextInput
                    placeholder='Password'
                    style={styles.textip}
                    onChangeText={this.getValuePassword}
                    value={this.state.password}
                  />
                </View>
                <Image
                  source={require('../Images/Login/Line.png')}
                  style={styles.line}
                />
              </View>
              <View style={styles.touchForget}>
                <TouchableOpacity>
                  <Text style={styles.textForget}>Forget Password</Text>
                </TouchableOpacity>
              </View>
            </ImageBackground>
          </View>
          <View style={styles.viewLogin}>
            <TouchableOpacity
              style={styles.touchLogin}
              onPress={this.navigateToMain}
            >
              <Text style={styles.textLogin}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.touchSignUp}
              onPress={this.navigateToSignUp}
            >
              <Text style={styles.textSignUp}>Sign up</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    payload: state.login,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    checkLogin: (data) => dispatch({
      type: LoginTypes.LOGIN_REQUEST,
      data,
    }),
    deletePayload: (payload) => dispatch({
      type: LoginTypes.LOGIN_DELETE_PAYLOAD,
      payload,
    }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
