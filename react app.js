import { tomato } from "color-name";
import React from "react";
import {View} from "react-native";

export default function App() {
  return(
    <View style={{ flexDirection:"row"}}>
      <View style={{width:100, height:200, backgroundColor:"tomato"}}></View>
      <View style={{width:100, height:200, backgroundColor:"teal"}}></View>
      <View style={{width:100, height:200, backgroundColor:"tomato"}}></View>
    </View>
    

  )
}

