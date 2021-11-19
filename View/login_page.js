/**
 * Handles logging in, signup page needs to be created for the relevant TouchableOpacity to be useful
 * 
 * Author: asirgue
 * Version: 2.0
 */

import React,{Fragment, useState} from 'react'
import {Alert,Dimensions, Modal,Text,TouchableOpacity,SafeAreaView,Image,Button,StyleSheet,View,TextInput} from 'react-native'
import { useDispatch } from 'react-redux'
import {useSelector} from 'react-redux'

import {login} from '../API functions/api_functions'
import {useNavigation} from '@react-navigation/native'

export default function Login (){
    const dispatch = useDispatch()
    const [email,onChangeEmail] = useState()
    const [password,onChangePassword] = useState()
    const [isLoggingIn,setIsLoggingIn] = useState(false)

    const userProfile = useSelector(state=>state.user)

    const navigation = useNavigation()

    const logging_in = (email,password,navigation, dispatch)=>{
        setIsLoggingIn(true)
        login(email, password).then(response=>{
            console.log(response)
            if (!response[0]){
                Alert.alert(
                    "Login failed",
                    "The password or email address you entered is incorrect",
                    [
                      {
                        text: "Please try again",
                        onPress: () => console.log("Ask me later pressed")
                      },
                    ]
                  )
            }
            else {
                console.log('we here')
                console.log(response[2])
                dispatch({type:'ADD_USER', payload:{user_id:response[2], token:response[1],company:response[3]}})
                .then(navigation.navigate('Main'))
            }

        })
        .catch(()=>{})
    }
    
    return(
        <SafeAreaView style={{backgroundColor:"#FAF9F9",flex:1}}>
            <View style={{marginLeft:"7,5%",marginRight:"12,5%",marginTop:"30%",flex:1}}>
            <Text style={{fontSize:40,color:"#89B0AE",fontWeight:"800"}}>Welcome</Text>
            <Text style={{fontSize:40,color:"#89B0AE",fontWeight:"800",marginBottom:"5%"}}>back !</Text>

            <TextInput
                style={styles.input}
                placeholderTextColor="#555B6E"
                onChangeText={onChangeEmail}
                value={email}
                placeholder="Email"
            />

            <TextInput
                secureTextEntry={true}
                style={styles.input}
                placeholderTextColor="#555B6E"
                onChangeText={onChangePassword}
                value={password}
                placeholder="Password"
            />

            <TouchableOpacity style={{alignSelf:'center',marginTop:"5%"}}>
                <Text style={{fontSize:18,color:"#555B6E",fontWeight:"600",textDecorationLine:'underline'}}>Forgot Password ?</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.bookIt_button} onPress={()=>{logging_in(email,password,navigation,dispatch)}}>
                    <Text style={{fontSize:24,fontWeight:"bold",color:"#000000"}}>Login</Text>
            </TouchableOpacity>     
            </View>

            <View style={{alignSelf:'center',flexDirection:'row',alignItems:'flex-end',justifyContent:'center'}}>
                <Text style={{fontSize:18,color:"#555B6E",fontWeight:"600",marginRight:"2%"}}>No acount ?</Text>
                <TouchableOpacity style={{}}>
                <Text style={{fontSize:22,color:"#89B0AE",fontWeight:"600",textDecorationLine:'underline'}}>Register</Text>
            </TouchableOpacity>
            </View>

            
        </SafeAreaView>
        
    )
}

const styles = StyleSheet.create({
    input:{
        height:40,
        fontSize:20,
        paddingLeft:5,
        color:"#555B6E",
        borderBottomWidth:2,
        borderBottomColor:"#FFD6BA",
        marginTop:"15%"
    },
    bookIt_button:{
        marginTop:"7%",
        alignSelf:"center",
        backgroundColor:"#BEE3DB",
        height:45,
        width:"100%",
        borderRadius:20,
        alignItems:"center",
        justifyContent:"center"
    },
})