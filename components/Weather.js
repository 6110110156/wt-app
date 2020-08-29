import React, { useState, useEffect } from 'react'
import { Text, ImageBackground, StyleSheet, View, Image } from 'react-native'
import Forecast from './Forecast';


export default function Weather(props) { 
    const [forecastInfo, setForecastInfo] = useState({
        name:'-',
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
                name:json.name,
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

    let img=" ";
    if(props.zipCode=='90110'){
        img=require("../Hat.jpg")
    }
    else if(props.zipCode=='92000'){
        img=require("../tra.jpg")
    }
    else if(props.zipCode=='50000'){
        img=require("../chai.jpg")
    }
    else if(props.zipCode=='40000'){
        img=require("../kon.jpg")
    }
    else if(props.zipCode=='20000'){
        img=require("../cho.jpg")
    }
    else if(props.zipCode=='10100'){
        img=require("../bkk.jpg")
    }
    else if(props.zipCode=='54000'){
        img=require("../lam.jpg")
    }

   
    return (
    <ImageBackground source={require("../bg3.jpg")} style={styles.backdrop}>
        <View style={styles.background}>
        <Text style={styles.testst}> Weather forecast</Text>
        <Forecast {...forecastInfo}/>
        <Text style={styles.testst2}> Code is {props.zipCode}</Text> 
        </View>
        <Image  style={styles.showimage } source={img} />
            
            
      
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
          alignItems:'stretch',
          backgroundColor:'#000',
          opacity:0.7 //ความเข้มของพื้นหลังสีดำ

       }
       ,testst: {
        color: '#fff',
        fontSize:35,
        textAlign:'center'
       }
        ,testst2: {
            color: '#fff',
            fontSize:20,
            textAlign:'right'
        }
        ,showimage:{
    
            marginTop:20,
            borderColor: "black",
            borderWidth: 5,
          
          
            height:'50%',
            width:'100%',
       
            flexDirection:'row',
            justifyContent:'space-between'  
        }
     
        
      }
   


   )