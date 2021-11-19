/**
 * Allows to implement Redux in our app (see use case in file comment of './reducer.js')
 * 
 * Author: asirgue
 * Version: 2.0
 */

import {createStore} from 'redux'
import rootReducer from './reducer'

const store = createStore(rootReducer)

export default store