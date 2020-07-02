import * as React from 'react';
import { View } from 'react-native';

import Header from './Buttons/Header';
import Attendance from './Buttons/Attendance';
import Production from './Buttons/Production';
import Sale from './Buttons/Sale';
import Stock from './Buttons/Stock';
import HomeScreen from './Screens/HomeScreen'
import AttendanceScreen from './Screens/AttendanceScreen'
import { createAppContainer , createSwitchNavigator } from 'react-navigation';


export default class App extends React.Component {
render() {
return (

   <View style={{flex:1 , backgroundColor:'black'}}>
    <AppContainer/>
   </View>
   
);
}
}        

var AppNavigator = createSwitchNavigator({HomeScreen:HomeScreen , AttendanceScreen:AttendanceScreen})
const AppContainer = createAppContainer(AppNavigator)