// Copyright (c) 2019-present vantuan88291, Personal. All Rights Reserved.
import React, {Component} from 'react'
import {Image, ImageBackground, ScrollView, Text, TextInput, TouchableOpacity, View} from 'react-native'
import {connect} from 'react-redux'

import styles from './Styles/SignUpScreenStyle'

class SignUpScreen extends Component {
  goBackToLogin = () => {
    this.props.navigation.goBack()
  }

  render() {
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
              <View style={styles.box}>
                <Image
                  source={require('../Images/Login/Pass.png')}
                  style={styles.iconPass}
                />
                <TextInput
                  placeholder='Confirm Password'
                  style={styles.textip}
                />
              </View>
              <Image
                source={require('../Images/Login/Line.png')}
                style={styles.line}
              />
            </View>
            <TouchableOpacity
              style={styles.touchSignUp}
            >
              <Text style={styles.textSignUp}>Sign up</Text>
            </TouchableOpacity>
          </ImageBackground>
          <TouchableOpacity
            style={styles.touchBack}
            onPress={this.goBackToLogin}
          >
            <ImageBackground
              source={require('../Images/Login/Circle.png')}
              style={styles.imgCircle}
            >
              <Image
                source={require('../Images/Login/Left-Arrow.png')}
                style={styles.imgArrow}
              />
            </ImageBackground>
          </TouchableOpacity>
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

export default connect(mapStateToProps, mapDispatchToProps)(SignUpScreen)
