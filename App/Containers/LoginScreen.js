// Copyright (c) 2019-present vantuan88291, Personal. All Rights Reserved.
import React, {Component} from 'react'
import {ScrollView, Image, ImageBackground, View, TextInput, TouchableOpacity, Text, Alert, AsyncStorage} from 'react-native'
import {connect} from 'react-redux'
import {NavigationActions, StackActions} from 'react-navigation'
import styles from './Styles/LoginScreenStyle'
import {LoginTypes} from '../Redux/LoginRedux'
import viewLoading from '../Components/ViewLoading'
import {api} from '../Sagas'

const resetAction = StackActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({routeName: 'MainScreen'})],
})

class LoginScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      phone_number: '',
      password: '',
      isLoading: false,
      isChecking: false,
      isCheckText: false,
      mesNull: '',
    }
  }

  autoLogin = async () => {
    await AsyncStorage.getItem('token').then((token) => {
      this.props.navigation.navigate(token ? this.props.navigation.dispatch(resetAction) : 'LoginScreen')
    })
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
    const {payload, phone_number, password} = this.state
    if (!phone_number) {
      this.setState({
        isCheckText: true,
        mesNull: 'Enter phone number.',
      })
      return
    }
    if (!password) {
      this.setState({
        isCheckText: true,
        mesNull: 'Enter password',
      })
      return
    }
    if (!phone_number && !password) {
      this.setState({
        isCheckText: true,
        mesNull: 'Enter phone number and password.',
      })
      return
    }
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
      isCheckText: false,
    })
    this.rememberUser()
    this.props.checkLogin(data)
    this.props.deletePayload(payload)
  }

  navigateToSignUp = () => {
    this.props.navigation.navigate('SignUpScreen')
  }

  onSubmit = () => {
    if (this.secondTextInput != null) {
      this.secondTextInput.focus()
    }
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
        api.api.setHeader('Authorization', 'Bearer ' + nextProps.payload.payload.data.token)
        nextProps.navigation.dispatch(resetAction)
        return {
          isLoading: false,
          isChecking: false,
        }
      }
      if (nextProps.payload.status_code === 401) {
        Alert.alert(nextProps.payload.message)
      }
    }
    return null
  }

  componentDidMount() {
    this.getremembedUser()
    this.autoLogin()
  }

  render() {
    const {isCheckText, mesNull} = this.state
    const btnLogin = (
      <TouchableOpacity
        style={styles.touchLogin}
        onPress={this.navigateToMain}
      >
        <Text style={styles.textLogin}>Login</Text>
      </TouchableOpacity>
    )
    const errMes = (
      <Text style={styles.message}>{mesNull}</Text>
    )
    return (
      <ScrollView>
        <ImageBackground
          source={require('../Images/Login/BACKGROUND.png')}
          style={styles.imgBg}
        >
          <Image
            source={require('../Images/Login/origami-bird.png')}
            style={styles.origamibird}
          />
          <ImageBackground
            source={require('../Images/Login/Path.png')}
            style={styles.path}
          >
            <Image
              source={require('../Images/Login/User.png')}
              style={styles.imguser}
            />
            <View style={styles.viewform}>
              <View style={styles.box}>
                <Image
                  source={require('../Images/Login/Email.png')}
                  style={styles.iconEmail}
                />
                <TextInput
                  placeholder='Email Address'
                  style={styles.textip}
                  returnKeyType='next'
                  clearButtonMode='always'
                  onSubmitEditing={this.onSubmit}
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
                  clearButtonMode={'while-editing'}
                  ref={(input) => {
                    this.secondTextInput = input
                  }}
                  onSubmitEditing={this.navigateToMain}
                  secureTextEntry={true}
                  onChangeText={this.getValuePassword}
                  value={this.state.password}
                />
              </View>
              <Image
                source={require('../Images/Login/Line.png')}
                style={styles.line}
              />
            </View>
            <TouchableOpacity>
              <Text style={styles.textForget}>Forget Password</Text>
            </TouchableOpacity>
            {isCheckText ? errMes : null}
          </ImageBackground>
          <View style={styles.viewLogin}>
            {this.state.isLoading ? viewLoading : btnLogin}
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
