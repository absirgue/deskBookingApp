/**
 * Displays every booking for user
 * 
 * Author: asirgue
 * Version: 2.0
 */

import React,{Fragment, useState} from 'react'
import {Dimensions, Modal,Text,TouchableOpacity,SafeAreaView,Image,Button,StyleSheet,View, FlatList,ScrollView} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {useSelector} from 'react-redux'

import {user_bookings} from '../API functions/api_functions'

import Footer from "../Components/footer"
import Header from "../Components/header"
import BookingElement from '../Component/booking_component'

async function get_data (user_id,token,setData){
    const bookings =  await user_bookings(user_id,token)
    console.log("we here")
    setData(bookings)
}

export default function Schedule (){


    const navigation= useNavigation()
    const [data,setData] = useState([])


    const userProfile = useSelector(state=>state.user)

    get_data(userProfile.user_id,userProfile.token,setData)

    console.log(data)

    return(
        <Fragment>
        <SafeAreaView style={styles.top_page}></SafeAreaView>
        <SafeAreaView style={styles.page}>
            <ScrollView style={{flex:1, backgroundColor:"#FAF9F9"}}>
                <Header heading="Your Schedule" sub_heading="You'll love your new work !" style={{height:"50%"}}/>
                <View style={styles.main_contentHolder}>
                <TouchableOpacity style={styles.bookIt_button} onPress={()=>{console.log(Date)}} onPress={()=>navigation.navigate('Booking')}>
                    <Text style={{fontSize:24,fontWeight:"bold",color:"#000000"}}>Book a Desk</Text>
                </TouchableOpacity>

                <Text style={styles.page_title}>Bookings</Text>
                <FlatList 
                data= {data}
                renderItem = {({item,index})=>{ return(<BookingElement address={item.desk.address} date ={JSON.stringify(item.date).split('T')[0].substring(1).toString().split('-').reverse().join('/')} locator={item.desk.locator}  />)}}
                keyExtractor={(item) => item._id}
                />
                
                </View>
            
            
            </ScrollView>
            <Footer/>
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
        justifyContent:"center",
        marginBottom:"15%"
    },

    checkbox:{
        borderWidth:0,
        marginRight:12,
        borderRadius:0
    }

})