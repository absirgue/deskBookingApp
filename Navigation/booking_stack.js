/**
 * Handles navigation throughout the booking process (seeing proposed desk and confirming intention to book it and then displaying a confirmation page when the booking has gone through)
 * 
 * Author: asirgue
 * Version: 2.0
 */


import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import Booking from '../View/booking'
import ConfirmBooking from '../View/confirm_booking'


const Stack = createStackNavigator();

function booking_stack() {
  return (
    <Stack.Navigator
    screenOptions={{headerShown:false}}
    initialRouteName="Booking"
    >
      <Stack.Screen name="Booking" component={Booking} />
      <Stack.Screen name="ConfirmBooking" component={ConfirmBooking} />
    </Stack.Navigator>
  );
}

export default booking_stack