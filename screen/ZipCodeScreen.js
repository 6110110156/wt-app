import React from 'react'
import { FlatList, View, Text, StyleSheet, ImageBackground } from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import { color } from 'react-native-reanimated'

const availableZipItem = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },
   ]

const ZipItem =({place,code,navigation})=>(
    <TouchableHighlight onPress={()=>{
        navigation.navigate('Weather',{zipCode: code})
    }}>
    
    <View style={styles.ZipItem}>
        <Text style={styles.Zipword}>{place}</Text>
        <Text style={styles.Zipword}>{code}</Text>
    </View>
    
    </TouchableHighlight>
)
export default function ZipCodeScreen(){
const navigation=useNavigation();
    return(
    <ImageBackground source={require("../home.jpg")} style={styles.HomeBG} >
        <Text style={styles.Zipword}>THE WEATHER</Text>
        <Text style={styles.Zipword}>Please select the desired province.</Text>
        <FlatList
            data={availableZipItem}
            keyExtractor={item=>item.code}
            renderItem= {({item})=> <ZipItem {...item} navigation={navigation}/>}
            />
            </ImageBackground>
    )
}
const styles =StyleSheet.create({
    ZipItem:{
        marginTop:15 ,
        paddingVertical: 5,
        borderWidth: 3,
        borderRadius: 6,
        backgroundColor:'#000',
        opacity:0.7, 
        flexDirection:'row',
        justifyContent:'space-between'       
    }
    ,Zipword:{
        textAlign:'center',
        fontSize:20,
        color:'#fff',
       
        }

    ,HomeBG:{
        width:'100%',
        height:'100%'}
    

})