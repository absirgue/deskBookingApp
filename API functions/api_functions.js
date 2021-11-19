/**
 * Handles all communications with API
 * 
 * Author: asirgue
 * Version: 2.0
 */

const api_url = "https://nework-api.herokuapp.com/"

// Logging in and storing credentials key to our ability to use API in later requests (token and userID)
const moment = require('moment')
export async function login(email,password){
    try {
    const url = 'https://nework-api.herokuapp.com/user/login'
    let data = {
        email: email,
        password: password
    }
    let response = await  fetch(url,{
        method:'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept:'*/*',
        },
        body: JSON.stringify(data),
    })
    let json = await response.json()
    
    if (json.message == "Auth successful"){
        return [true, json.token, json._id, json.company]
    }
    else {
        return [false]
    }
    
}
catch {return [false]}
}

// Looking for a desk with the most of the indicated preferences possible available on the date mentionned
export async function find_desk(company,date,f_preference,s_preference,token){
    try {
        date= JSON.stringify(date)
        date = date.split('T')[0].substring(1)
        console.log(date)
        const url = 'https://nework-api.herokuapp.com/desk/find_desk'
        let data = {
            company: company,
            date: date,
            f_preference:f_preference,
            s_preference:s_preference
        }
        let response = await  fetch(url,{
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept:'*/*',
                Authorization:'Bearer '+token,
            },
            body: JSON.stringify(data),
        })
        let json = await response.json()
        console.log(json)
        return json
        
    }
    catch {return false}
    }    

// Booking a desk when the user confirmed that he wanted to book a certain desk at a certain date
export async function booking (date,desk_id,company_id,user_id,token){
    try {
        date= JSON.stringify(date)
        date = date.split('T')[0].substring(1)
        console.log(date)
        const url = 'https://nework-api.herokuapp.com/desk/'+desk_id+'/book_desk'
        let data = {
            date:date
        }
        let response = await  fetch(url,{
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept:'*/*',
                Authorization:'Bearer '+token,
            },
            body: JSON.stringify(data),
        })
        let json_premier = await response.json()

        const url_second = 'https://nework-api.herokuapp.com/booking/create_booking'
        let data_second = {
            date:date,
            company:company_id,
            desk: desk_id,
            user: user_id
            
        }
        let response_second = await  fetch(url_second,{
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept:'*/*',
                Authorization:'Bearer '+token,
            },
            body: JSON.stringify(data_second),
        })
        let json_second = await response_second.json()

        if (json_premier.message=="DONE yes " && json_second.message=="booking saved"){
            return true
        }
        else {
            return false
        }
        
        
    }
    catch {return false}
    }    

// Getting all bookings for a user so that he can consult them 
export async function user_bookings(user_id,token){
    const url = 'https://nework-api.herokuapp.com/booking/'+user_id+'/get_user_booking'
   
        let response = await  fetch(url,{
            method:'GET',
            headers: {
                'Content-Type': 'application/json',
                Accept:'*/*',
                Authorization:'Bearer '+token,
            }
        })
        let json = await response.json()
        console.log('json'+json)
        const bookings = json.bookings_for_this_user
        bookings.sort(function(a, b) {
            var dateA = new Date(a.date), dateB = new Date(b.date);
            return dateA - dateB;
        });
        let filtering_to_present = false
        let i = 0
        while (!(filtering_to_present)){
            const today_date = new Date()
            if (moment(bookings[i].date).isBefore(today_date)){
                i=i+1
            }
            else{
                filtering_to_present=true
            }

        }
        const present_bookings = bookings.splice(i+1)

        return present_bookings

}
