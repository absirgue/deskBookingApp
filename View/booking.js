/**
 * Booking page to allow user to look for a desk and switch to the 'Booking navigation routine' (seeing the desk we found for him and confirming his booking)
 * 
 * Author: asirgue
 * Version: 2.0
 */

import React,{Fragment, useState} from 'react'
import {Alert,Dimensions, Modal,Text,TouchableOpacity,SafeAreaView,Image,Button,StyleSheet,View} from 'react-native'
import CheckBox from 'react-native-check-box'
import DateTimePicker from '@react-native-community/datetimepicker';
import {useSelector} from 'react-redux'

import {find_desk} from '../API functions/api_functions'

import Footer from "../Components/footer"
import Header from "../Components/header"
import Confirm from './confirm_booking'

export default function Booking (){
    const today_date=()=>{const date = new Date(); return date}
    const [modalShow,setModalShow] = useState(false)
    const [f_preference_isSelected,f_preference_setSelection] = useState(false);
    const [s_preference_isSelected,s_preference_setSelection] = useState(false);
    const [calendar_visible,setCalendar_visible] = useState(false)
    const [date,setDate] = useState(today_date())
    const [locator,setLocator] = useState();
    const [address,setAddress] = useState();
    const [desk_id,setDeskId] = useState();
    const [f_preferenceOfDesk,setF_preferenceOfDesk] = useState();
    const [s_preferenceOfDesk,setS_preferenceOfDesk] = useState();
    const [options, setOptions]=useState()


    const userProfile = useSelector(state=>state.user)


    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setDate(currentDate);
      };
    

    async function looking_for_desk (Alert, setModalShow,modalShow,date,token,company,f_preference,s_preference,setLocator,setAddress,setDeskId,setF_preferenceOfDesk,setS_preferenceOfDesk) {
        console.log(f_preference)
        console.log(s_preference)
        console.log(date)
        const response = await find_desk(company,date,f_preference,s_preference,token)
        console.log('la réponse est :'+response)
       

        if (response && !(response.error) && !(response.err)) {
            console.log('ca marche')
            setLocator(response.locator)
            setDeskId(response.id)
            setAddress(response.address)
            setF_preferenceOfDesk()
            setS_preferenceOfDesk()

            if (response.f_preference && response.s_preference){
                setOptions("(Isolated + Next to Coffee Machine)")
            }
            else if (response.f_preference){
                setOptions("(Isolated)")
            }
            else if (response.s_prefenrence){
                setOptions("(Next to Coffee Machine)")
            }
            else{
                setOptions("")
            }
        
            setModalShow(!modalShow)
        }
        else if (response.error == "max occupancy reached on this date"){
            Alert.alert(
                "Max occupancy reached",
                "Desks are fully occupied on the selected day, please chose another day.",
                [
                  {
                    text: "Select another date",
                    onPress: () => console.log("select another date pressed")
                  },
                ]
              )
        }
        else {
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
    }


    return(
        <Fragment>
        <SafeAreaView style={styles.top_page}></SafeAreaView>
        <SafeAreaView style={styles.page}>
            <View style={{flex:1, backgroundColor:"#FAF9F9"}}>
            <Header heading="NeWork." sub_heading="Enjoy your NeWorking Experience !" style={{height:"50%"}}/>
            
            <View style={styles.main_contentHolder}>
                <Text style={styles.page_title}>Book a Desk</Text>

                <View 
                style={{borderBottomWidth:2,marginBottom:"12%",justifyContent:'flex-end',borderBottomColor:"#FFD6BA"}}
                onPress = {()=>setCalendar_visible(true)}>
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={date}  
                        mode='date'
                        display="calendar"
                        onChange={onChange}
                        style={{marginBottom:0,height:50,color:"#000000"}}
                    />
                </View>

                <View style = {styles.preference_container}>
                    <View style={{flexDirection:"row",marginBottom:"7%",alignItems:"center"}}>
                        <CheckBox
                            
                            style={styles.checkbox}
                            onClick={()=>{f_preference_setSelection(!f_preference_isSelected) }}
                            isChecked={f_preference_isSelected}
                        />
                        <Text style={styles.first_preference} numberofLines = {1} adjustsFontSizeToFit={true} >Isolated</Text>
                    </View>
                    <View style={{flexDirection:"row",alignItems:"center"}}>
                        <CheckBox
                            numberofLines = {1}
                            style={styles.checkbox}
                            onClick={()=>{s_preference_setSelection(!s_preference_isSelected) }}
                            isChecked={s_preference_isSelected}
                        />
                        <Text style={styles.second_preference} numberofLines = {1} adjustsFontSizeToFit={true}>Next to Coffee Machine !</Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.bookIt_button} onPress={()=>{looking_for_desk(Alert,setModalShow,modalShow,date,userProfile.token,userProfile.company,f_preference_isSelected,s_preference_isSelected,setLocator,setAddress,setDeskId,setF_preferenceOfDesk,setS_preferenceOfDesk) }}>
                    <Text style={{fontSize:24,fontWeight:"bold",color:"#000000"}}>Book it !</Text>
                </TouchableOpacity>
                    <Confirm setModalShow={setModalShow} visible={modalShow} locator={locator} address={address} desk_id={desk_id} date={date} f_preference={f_preferenceOfDesk} s_preference={s_preferenceOfDesk} options={options}/>  
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
        marginRight:"12,5%",
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