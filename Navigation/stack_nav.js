/**
 * Refered to as 'Main' is general_stack.js
 * Main navigation of the app after logging in as gone through, the navigation is done through icons in the header and footer for nice UX
 * 
 * Author: asirgue
 * Version: 2.0
 */

import { createStackNavigator } from '@react-navigation/stack';
import Home from '../View/home'
import Profile from '../View/profile'
import Schedule from '../View/schedule'
import BookingStack from '../Navigation/booking_stack'

import React from 'react'

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
    screenOptions={{headerShown:false}}
    initialRouteName="Home"
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Booking" component={BookingStack} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Schedule" component={Schedule} />
    </Stack.Navigator>
  );
}

export default MyStack