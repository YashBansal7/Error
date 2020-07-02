import * as React from 'react';
import { View } from 'react-native';
import AttendanceScreen from './AttendanceScreen'
import Header from './Buttons/Header';
import Attendance from './Buttons/Attendance';
import Production from './Buttons/Production';
import Sale from './Buttons/Sale';
import Stock from './Buttons/Stock';


export default class HomeScreen extends React.Component {

    gotoAttendance=()=>{
        this.props.navigation.navigate('AttendanceScreen')
      }

render() {
return (

   <View style={{flex:1 , backgroundColor:'black'}}>
   <Header />
   <Attendance />
   <Stock />
   <Production />
   <Sale />
   
   </View>
   
);
}
}                