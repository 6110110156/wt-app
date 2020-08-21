import React, { useState } from 'react'
import { Text, ImageBackground, StyleSheet, View } from 'react-native'
import Forecast from './Forecast';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function Weather(props) {

    const [forecastInfo, setForecastInfo] = useState({
        main: '-',
        description: '-',
        temp: 0
        }) 

    return (
    <ImageBackground source={require("../bg2.jpg")} style={styles.backdrop}>
        <View style={styles.background}>
            <Text style={styles.testst}>Zip Code is {props.zipCode}</Text>
            
            <Forecast {...forecastInfo}/>
       </View>
    </ImageBackground>
    );
   }
   
   const styles = StyleSheet.create({
       backdrop: {
           width: '100%',
           height: '100%'

       }
       ,background:{
           flexDirection: 'column',
          alignItems:'center',
          backgroundColor:'#000',
          opacity:0.7 //ความเข้มของพื้นหลังสีดำ

       }
       ,testst: {
        color: '#fff',
        fontSize:25,
        textAlign:'center',
     
        
      }
   }


   )