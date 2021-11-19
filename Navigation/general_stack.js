/**
 * Handles the Logging-in Navigation by:
 * - dispalying a quick animation for nice UX
 * - displaying logging in view for user to enter credentials
 * - displaying main page if credentials are correct and logging in as gone through
 * 
 * Author: asirgue
 * Version: 2.0
 */

import { createStackNavigator } from '@react-navigation/stack';
import Login from '../View/login_page'
import MainStack from './stack_nav'
import Animation from '../View/animation'
import React from 'react'

const Stack = createStackNavigator();

function GeneralStack() {
  return (
    <Stack.Navigator
    screenOptions={{headerShown:false}}
    initialRouteName="Animation"
    >
      <Stack.Screen name="Animation" component={Animation} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Main" component={MainStack} />
    </Stack.Navigator>
  );
}

export default GeneralStack