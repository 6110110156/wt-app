import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

export default function Forecast(props) {
    return (
    <View>
        <Text style={styles.testst}>At {props.name}</Text>
         <Text style={styles.testst}>weater: {props.main}({props.description})</Text>
         <Text style={styles.testst}>Temp : {props.temp} °C</Text>
         <Text style={styles.testst}> Feel like: {props.feels_like} °C</Text>
    
    </View>
    );
   }
   const styles = StyleSheet.create({
   testst: {
     color: '#fff',
     fontSize:25,
     textAlign:'center'
     
   }
}


)
 