/**
 * Allows user to consult his profile (personal infos)
 * 
 * Author: asirgue
 * Version: 2.0
 */

import React,{Fragment, useState} from 'react'
import {Dimensions, Modal,Text,TouchableOpacity,SafeAreaView,Image,Button,StyleSheet,View} from 'react-native'
import CheckBox from 'react-native-check-box'
import DateTimePicker from '@react-native-community/datetimepicker';

import Footer from "../Components/footer"
import Header from "../Components/header"


export default function Profile (){
    
    return(
        <Fragment>
        <SafeAreaView style={styles.top_page}></SafeAreaView>
        <SafeAreaView style={styles.page}>
            <View style={{flex:1, backgroundColor:"#FAF9F9"}}>
            <Header heading="Your Profile" sub_heading="Chill, you're neworking !" style={{height:"50%"}}/>
            
            <View style={styles.main_contentHolder}>
                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                    <Text style={{fontSize:70,color:"#FFD6BA",fontWeight:'800',marginRight:"12,5%"}}>3</Text>
                    <Text style={{width:"60%",fontSize:22,color:"#555B6E",fontWeight:'600'}}>On average, you spend 3 days per week at the office</Text>
                </View>
                <View style={{paddingBottom:"9%",paddingTop:"9%",justifyContent:'space-between',paddingLeft:"5%",marginTop:'35%',height:"40%",backgroundColor:"#FFFFFF",borderRadius:20,width:'96%'}}>
 
                    <View style={{flexDirection:"row",alignItems:'flex-end'}}>
                        <Text style={{fontSize:20,color:"#555B6E",fontWeight:"500"}}>First Name</Text>
                        <Text style={{fontSize:21,color:"#89B0AE",marginLeft:"10%"}}>Anton</Text>
                    </View>
                    <View style={{flexDirection:"row",alignItems:'flex-end'}}>
                        <Text style={{fontSize:20,color:"#555B6E",fontWeight:"500"}}>Last Name</Text>
                        <Text style={{fontSize:21,color:"#89B0AE",marginLeft:"10%"}}>Sirgue</Text>
                    </View>
                    <View style={{flexDirection:"row",alignItems:'flex-end'}}>
                        <Text style={{fontSize:20,color:"#555B6E",fontWeight:"500"}}>Email</Text>
                        <Text style={{fontSize:18,color:"#89B0AE",marginLeft:"10%"}}>asirgue.nework@gmail.com</Text>
                    </View>
                    <View style={{flexDirection:"row",alignItems:'flex-end'}}>
                        <Text style={{fontSize:20,color:"#555B6E",fontWeight:"500"}}>Password</Text>
                        <Text style={{fontSize:21,color:"#89B0AE",marginLeft:"10%"}}>************</Text>
                    </View>
                </View>
            </View>
            
            </View>
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
        marginTop:"20%",
        marginLeft:"7,5%",
        marginRight:"1%",
        backgroundColor:"#FAF9F9",
        flex:80
    },
    page_title:{
        fontSize:40,
        fontWeight:'800',
        marginBottom:"20%",
        color:"#89B0AE"
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
        backgroundColor:"#BEE3DB",
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