/**
 * Component used in Multiple views, it simply gives an nice structure for displaying details of a booking
 * 
 * Author: asirgue
 * Version: 2.0
 */


import React,{useState} from 'react'
import {Modal,Text,TouchableOpacity,SafeAreaView,Image,Button,StyleSheet,View} from 'react-native'


export default function booking_element (props){
    console.log("object :"+props.date)

    return(
        <View style={{height:110,flexDirection:'row',justifyContent:"space-between",padding:27,alignItems:'center',width:"100%",backgroundColor:"#ffffff",borderRadius:20,marginBottom:"3%"}}>
            <View style={{paddingLeft:12}}>
                <Text style={{fontSize:20,color:"#555B6E",fontWeight:'500'}}>Desk {props.locator}</Text>
                <Text style={{fontSize:20,color:"#555B6E",fontWeight:'500'}}>@ {props.address}</Text>
                <Text style={{fontSize:20,color:"#555B6E",fontWeight:'500'}}>On {props.date}</Text>
            </View>
            <TouchableOpacity>
                <Image source={require('../Images/invite.png')}/>
            </TouchableOpacity>
        </View>
    )
}