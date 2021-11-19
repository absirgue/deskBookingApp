/**
 * Storing token, userId, and companyId as soon as logging_in as gone through so that every component can execute API calls by passing these as parameters to our API-related functions (defined in specific folder)
 * 
 * Author: asirgue
 * Version: 2.0
 */

const initialState = {start:{} }

export default function appReducer (state=initialState, action){
    console.log('we here again ')
    switch (action.type){

        case 'ADD_USER':{
            console.log('in good case')
            return {
            ...state,
            user:{
                token:action.payload.token,
                user_id: action.payload.user_id,
                company:action.payload.company
            }
            }
        }
        default:
            return state
    }
}
