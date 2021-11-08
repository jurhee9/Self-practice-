import { tomato } from "color-name";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, TouchableHighlight } from "react-native";
import {View} from "react-native";
import { theme } from "./colors";

export default function App() {
  return(
  

    <View style={{ flexDirection:"row"}}>
      <View style={{width:100, height:200, backgroundColor:"tomato"}}></View>
      <View style={{width:100, height:200, backgroundColor:"teal"}}></View>
      <View style={{width:100, height:200, backgroundColor:"tomato"}}></View>
    </View>
    







  )
}
export default function App(){
  return(
    <View style= {styles.container}>
    <Satusbar style="auto" />
    <View style={styles.header}>
   <TouchableOpacity>
    <Text style={styles.btnText}>Work</Text>
    </TouchableOpacity>
    <Text style={styles.btnText}>Travel</Text>
    </View>
    </View>
  );
}

const styles = Stylesheet.create({
  container: { 
    flex: 1, 
    backgroundColor: theme.bg,
    paddingHorizontal: 20,

  },
  header: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 100,

  },
  btnText: {
    fontSize: 38,
    fontWeight: "600",
    color: "white",
  }
});







