import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useEffect, useState } from 'react';

export default function App() {
  const[results, setResults] = useState('');
  const[city, setCity] = useState('');

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; 
var yyyy = today.getFullYear();
if(dd<10) 
{
    dd='0'+dd;
} 
if(mm<10) 
{
    mm='0'+mm;
} 
today = mm+'-'+dd+'-'+yyyy;

const request = async () => {const url = 'https://weatherapi-com.p.rapidapi.com/forecast.json?q=' + city + '&days=3=' + today;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3c9510ca70mshf8fe7463f988101p197cb5jsn5804d7f8fa69',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
  setResults(result);
} catch (error) {
	console.error(error);
}
}
useEffect(() => {
    request();
  });

  return (
    <View style={styles.container}>
      <Text style={{color: 'lawngreen'}}>CHOOSE YOUR CITY:</Text>
      <TextInput onChangeText={newText => setCity(newText)} style={{backgroundColor: 'darkgrey', width: "40%", marginTop: "3%"}}></TextInput>
      <Text style={{color: 'lawngreen'}}>{results}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
});