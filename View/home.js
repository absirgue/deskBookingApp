/**
 * Home page, welcomes the user, gives basic info, and invites to navigate
 * 
 * Author: asirgue
 * Version: 2.0
 */


import React,{Fragment, useState} from 'react'
import {Dimensions, Modal,Text,TouchableOpacity,SafeAreaView,Image,Button,StyleSheet,View} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {useSelector} from 'react-redux'


import Footer from "../Components/footer"
import Header from "../Components/header"
import BookingElement from '../Component/booking_component'

import {user_bookings} from '../API functions/api_functions'


async function get_data (id,token,setData){
    const bookings =  await user_bookings(id,token)
    console.log("we here")
   
    setData(bookings[0])
}


export default function Home (){
    const [data,setData] = useState({})
    const navigation= useNavigation()
    const userProfile = useSelector(state=>state.user)

    get_data(userProfile.user_id,userProfile.token,setData)
    console.log('data for home:'+data)

    return(
        <Fragment>
        <SafeAreaView style={styles.top_page}></SafeAreaView>
        <SafeAreaView style={styles.page}>
            <View style={{flex:1, backgroundColor:"#FAF9F9"}}>
                <Header heading="Home" sub_heading="We are taking care of you" style={{height:"50%"}}/>
                <View style={styles.main_contentHolder}>

                <TouchableOpacity style={styles.bookIt_button} onPress={()=>{console.log(Date)}} onPress={()=>navigation.navigate('Booking')}>
                    <Text style={{fontSize:24,fontWeight:"bold",color:"#000000"}}>Book a Desk</Text>
                </TouchableOpacity>
                    <Text style={styles.page_title}>Next Booking</Text>
                    <BookingElement date={JSON.stringify(data.date).split('T')[0].substring(1).toString().split('-').reverse().join('/')} address={data.desk.address} locator={data.desk.locator} />
                    <Text style={styles.page_title}>Events</Text>
                    <Text style={{marginLeft:"5%",fontSize:20,color:"#555B6E",fontWeight:'500'}}>Coming soon ...</Text>
                </View>
            
            <Footer/>
            </View>
        </SafeAreaView>
        </Fragment>
        
    )
}




const styles = StyleSheet.create({
    classic_text:{
        fontSize:20
    },
    top_page:{
        flex:0,
        backgroundColor:"#BEE3DB"
    },

    page:{
        flex:1,
        backgroundColor:"#FAF9F9"
    },


    main_contentHolder:{
        marginTop:"15%",
        marginLeft:"7,5%",
        marginRight:"7,5%",
        backgroundColor:"#FAF9F9",
        flex:80
    },
    page_title:{
        fontSize:40,
        fontWeight:'800',
        marginBottom:"5%",
        color:"#89B0AE",
        marginTop:"10%"
    },
    date:{
        fontSize:20,
        color:"#555B6E",
        marginBottom:3,
        marginLeft:10
    },

    preference_container:{
        marginBottom:"25%"
    },
    first_preference:{
        fontSize:20,
        color:"#555B6E"
    },
    second_preference:{
        fontSize:20,
        color:"#555B6E",        
    },

    bookIt_button:{
        alignSelf:"center",
        backgroundColor:"#FFD6BA",
        height:45,
        width:"100%",
        borderRadius:20,
        alignItems:"center",
        justifyContent:"center"
    },

    checkbox:{
        borderWidth:0,
        marginRight:12,
        borderRadius:0
    }

})