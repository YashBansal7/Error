import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class Header extends React.Component{
  render(){
return(
 <View style = {styles.TextContainer}>
<Text style = {styles.TextStyler}>Business Manager</Text>
</View>
);
}
}

const styles = StyleSheet.create({
  TextContainer:{
    backgroundColor:'black',
    borderWidth:4,
    borderColor:'aqua',
  },

  TextStyler:{
padding:15,

fontSize:28,
color:'aqua',
fontWeight:'bold',
textAlign:'center',
  }
})
