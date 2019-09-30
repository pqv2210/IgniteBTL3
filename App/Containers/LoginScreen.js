// Copyright (c) 2019-present vantuan88291, Personal. All Rights Reserved.
import React, {Component} from 'react'
import {ScrollView, Image, ImageBackground, View, TextInput, TouchableOpacity, Text} from 'react-native'
import {connect} from 'react-redux'

import styles from './Styles/LoginScreenStyle'

class LoginScreen extends Component {
  navigateToSignUp = () => {
    this.props.navigation.navigate('SignUpScreen')
  }

  navigateToMain = () => {
    this.props.navigation.navigate('MainScreen')
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
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
