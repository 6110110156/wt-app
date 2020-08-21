import React, { useState, useEffect } from 'react'
import { Text, ImageBackground, StyleSheet, View } from 'react-native'
import Forecast from './Forecast';


export default function Weather(props) { 
    const [forecastInfo, setForecastInfo] = useState({
        main: '-', 
        description: '-',
        feels_like:0,
        temp: 0
        }) 

    useEffect(() => {
        console.log(`fetching data with zipCode = ${props.zipCode}`)
        if (props.zipCode) {
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=9bc2f79f006eb8601d6728304d948687`)
        .then((response) => response.json())
        .then((json) => {
            setForecastInfo({
                 main: json.weather[0].main,
                 description: json.weather[0].description,
                 feels_like:json.main.feels_like,
                 temp: json.main.temp
             });
        })
        .catch((error) => {
            console.warn(error);
        });
        }
    }, [props.zipCode])


   
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