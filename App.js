/**
 * Lands on animation when app is started, we see the redux store is overeaching the app
 * 
 * Author: asirgue
 * Version: 2.0
 */

import React from 'react';
import {Provider} from 'react-redux'
import store from './redux/store'


import { NavigationContainer } from '@react-navigation/native';


import MainStack from './Navigation/stack_nav'
import Animation from './View/animation'
import Navigation from './Navigation/general_stack'
import Booking from './View/booking'

export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Navigation/>
    </NavigationContainer>
    </Provider>
  );
}
