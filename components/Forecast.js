import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

export default function Forecast(props) {
    return (
    <View>
         <Text style={styles.testst}>{props.main}</Text>
         <Text style={styles.testst}>{props.description}</Text>
         <Text style={styles.testst}>{props.temp} °C</Text>
    
    </View>
    );
   }
   const styles = StyleSheet.create({
   testst: {
     color: '#fff',
     fontSize:45,
     textAlign:'center'
     
   }
}


)
 