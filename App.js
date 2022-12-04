import React from 'react';
import { Platform, SafeAreaView, StyleSheet ,Text, View } from 'react-native';
import Box from './components/Box';

//Cyan: #2aa198 Blue: #268bd2 Magenta: #d33682 Orange: #cb4b16

export default function App(){
  return (
  <SafeAreaView>
    <View style={styles.containerStyle}>
      <Text style={styles.text}>Here are some texts with color names:</Text>
      <Box title="Cyan: #2aa198" bgColor="#2aa198"/>
      <Box title="Blue: #268bd2" bgColor="#268bd2"/>
      <Box title="Magenta: #d33682" bgColor="#d33682"/>
      <Box title="Orange: #cb4b16" bgColor=" #cb4b16"/>
      <Box title={Platform.OS === 'ios'? "I am ios": "I am android"} bgColor="gray"/>
    </View>
    
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerStyle:{
    marginTop:50,
    paddingHorizontal:15
    
  },
  text:{
    fontWeight:'bold',
    fontSize: 20,
    marginBottom:15,

  }
})