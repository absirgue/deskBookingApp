/**
 * Footer handles the navigation thanks to clickable icons
 * 
 * Author: asirgue
 * Version: 2.0
 */


import React,{useState} from 'react'
import {Modal,Text,TouchableOpacity,SafeAreaView,Image,Button,StyleSheet,View} from 'react-native'
import {useNavigation} from '@react-navigation/native'

export default function customFooter (){
    const navigation= useNavigation()
    return(
        <View style={{marginTop:0,height:"10%",flexDirection:'row',justifyContent:"space-evenly",alignItems:"flex-end",marginBottom:"2%"}}>
            <TouchableOpacity style={{marginRight:"15%"}} onPress={()=>navigation.navigate('Home')}>
                <Image source={require('../Images/home.png')}/>
            </TouchableOpacity>
            <TouchableOpacity style={{marginLeft:"15%"}} onPress={()=>navigation.navigate('Schedule')}>
            <Image source={require('../Images/schedule.png')}/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        fontSize:40,
        fontWeight:"800",
        color:"#000000",
    },
    sub_header:{
        fontSize:18,
        fontWeight:"200",
    }

})