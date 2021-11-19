/**
 * Header handles navigation to user profile 
 * 
 * Author: asirgue
 * Version: 2.0
 */


import React,{useState} from 'react'
import {Modal,Text,TouchableOpacity,SafeAreaView,Image,Button,StyleSheet,View} from 'react-native'
import {useNavigation} from '@react-navigation/native'

export default function customHeader (props){
    const navigation= useNavigation()
    return(
        <View style={{backgroundColor:"#BEE3DB",marginTop:0,flex:20}}>
            <View style={{marginLeft:"7,5%",marginTop:"8%",marginBottom:"10%",flexDirection:'row',justifyContent:'space-between'}}>
                <View>
                <Text style={styles.header}>{props.heading}</Text>
                <Text style={styles.sub_header}>{props.sub_heading}</Text>
                </View>
                <TouchableOpacity style={{alignSelf:'center',marginRight:'7%'}} onPress={()=>navigation.navigate('Profile')}>
                    <Image source={require('../Images/user.png')}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        fontSize:40,
        fontWeight:"800",
        color:"#555B6E",
    },
    sub_header:{
        fontSize:18,
        fontWeight:"200",
    }

})