/**
 * Shows desk we found for the user and asks him to confirm his will to book it (part of the 'Booking navigation routine')
 * 
 * Author: asirgue
 * Version: 2.0
 */

import React,{Fragment, useState} from 'react'
import {Alert,Dimensions, Modal,Text,TouchableOpacity,SafeAreaView,Image,Button,StyleSheet,View} from 'react-native'
import {useSelector} from 'react-redux'
import {booking} from '../API functions/api_functions'

export default function Booking (props){
    const closeModal = ()=>{props.setModalShow(!props.visible)}

    const userProfile = useSelector(state=>state.user)

    async function book_desk (desk_id,userProfile,date){
        const booking_done = await booking (date,desk_id,userProfile.company,userProfile.user_id,userProfile.token)
        if (booking_done){
            Alert.alert(
                "Booking successful !",
                "Enjoy your NeWork !",
                [
                  {
                    text: "Thank you !",
                    onPress: () => console.log("thank you pressed")
                  },
                ]
              )
            
            setTimeout(()=>{closeModal()},1000)
        }
        else{
            Alert.alert(
                "Error booking desk",
                "We're sorry about that. Please try again later",
                [
                  {
                    text: "Ok",
                    onPress: () => console.log("Ask me later pressed")
                  },
                ]
              )

        }
    }

    return(
        <Modal
        visible={props.visible}
        animationType='slide'>
        <SafeAreaView style={{backgroundColor:"#FAF9F9",flex:1}}>
        <View style={{flex:1,marginLeft:"7,5%",marginRight:'12,5%'}}>
            <Text style={{marginTop:"40%",fontSize:40,fontWeight:'800',color:"#89B0AE"}}>Your Booking</Text>
            <Text style={{marginTop:"25%",fontSize:35,fontWeight:'800',color:"#FFD6BA"}}>Desk {props.locator}</Text>
            <Text style={{marginTop:"2%",fontSize:20,color:"#555B6E"}}>{props.options}</Text>

            <View style={{marginLeft:"10%",marginTop:"10%"}}>
                <Text style={{fontWeight:'500',fontSize:22}}>@ {props.address}</Text>
                <Text style={{fontWeight:'500',fontSize:22,marginTop:"5%"}}>On {JSON.stringify(props.date).split('T')[0].substring(1).toString().split('-').reverse().join('/')}</Text>
            </View>
            <TouchableOpacity style={styles.bookIt_button} onPress={()=>{book_desk(props.desk_id,userProfile,props.date)}}>
                    <Text style={{fontSize:24,fontWeight:"bold",color:"#000000"}}>Book it !</Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={()=>{closeModal()}}>
                    <Text style={{fontSize:20,fontWeight:"600",color:"#555B6E",textDecorationLine:'underline',marginTop:'10%',alignSelf:'center'}}>Cancel Booking</Text>
            </TouchableOpacity>
            </View>
        </SafeAreaView>
        </Modal>
        
        
    )
}

const styles = StyleSheet.create({
    bookIt_button:{
    marginTop:"20%",
    alignSelf:"center",
    backgroundColor:"#BEE3DB",
    height:45,
    width:"100%",
    borderRadius:20,
    alignItems:"center",
    justifyContent:"center"

    }
})

