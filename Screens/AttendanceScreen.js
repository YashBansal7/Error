import * as React from 'react';
import { Text, View,TouchableOpacity,StyleSheet } from 'react-native';


export default class AttendanceScreen extends React.Component {
   

  render() {
    return (
        <View style={{flex:1 , alignItems:'center', justifyContent:'center'}}>
      <TouchableOpacity style= {Styles.buzzer}>
      <Text style = {Styles.buttonText}> Add Person </Text>
      </TouchableOpacity>
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  buzzer:{
    backgroundColor:'black', alignItems:'center' , justifyContent:'center' , width:190 , height:100 , borderRadius:200,borderColor:'aqua',borderWidth:5,
  },
  buttonText:{
    color:'aqua' , fontSize:25 
  }
})