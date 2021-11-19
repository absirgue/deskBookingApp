/**
 * Animates the name of the app ('NeWork') when the app is opened and before logging in
 * 
 * Author: asirgue
 * Version: 2.0
 */

import React, { useRef, useEffect } from 'react';
import { Animated, Text, View } from 'react-native';
import {useNavigation} from '@react-navigation/native'

const FadeInView = (props) => {
  const fadeAnim = useRef(new Animated.Value(35)).current  // Initial value for opacity: 0

  React.useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 80,
        duration: 2000,
      }
    ).start(()=>props.navigation.navigate('Login'));
  }, [fadeAnim])

  return (
    <Animated.Text                 // Special animatable View
      style={{
        ...props.style,
        fontSize: fadeAnim,         // Bind opacity to animated value
      }}
    >
      {props.children}
    </Animated.Text>
  );
}

// You can then use your `FadeInView` in place of a `View` in your components:
export default () => {
    const navigation = useNavigation()
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor: '#FAF9F9'}}>
   
        <FadeInView navigation={navigation} style={{color:"#89B0AE",fontWeight:"700"}}>NeWork.</FadeInView>
    </View>
  )
}