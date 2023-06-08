import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { DataTable } from 'react-native-paper';
export default function App() {
  const[results, setResults] = useState([]);
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
	const result = await response.json();
  setResults(result);
} catch (error) {
	console.error(error);
}
}
useEffect(() => {
    request();
  });
  function show(){
    setSelected(true);
  }

  const [selected, setSelected] = useState(false);

  if (selected){
    try{
      const locat = <Text style={{color: "darkgrey"}}>{results.location.name}</Text>
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => setSelected(false)} style={{marginRight: "80%"}}><Text style={{color: "lawngreen"}}>B A C K {locat}</Text></TouchableOpacity>
        


        <DataTable>

      <DataTable.Header style={styles.tableHeader}>
        <DataTable.Title>{results.current.condition.text}</DataTable.Title>
        <DataTable.Title>{results.current.temp_c}</DataTable.Title>
        <DataTable.Title>Age</DataTable.Title>
      </DataTable.Header>

      <DataTable.Row>
        
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell>{results.current.condition.text}</DataTable.Cell>
        <DataTable.Cell>{results.current.condition.text}</DataTable.Cell>
        <DataTable.Cell>{results.current.condition.text}</DataTable.Cell>
      </DataTable.Row>

    </DataTable>

        <StatusBar style="auto" />
      </View>
    )}
    catch (error) {
      return (
        <View style={styles.container}>
          <Text style={{color: 'lawngreen'}}>CHOOSE YOUR CITY:</Text>
          <TextInput onSubmitEditing = {() => show()} onChangeText={newText => setCity(newText)} style={{backgroundColor: 'darkgrey', width: "40%", marginTop: "3%", textAlign:"center"}}></TextInput>
          <Text style={{color: "red"}}>Such city does not exist!</Text>
          <StatusBar style="auto" />
        </View>
      );
    }
  }
  else{
    return (
      <View style={styles.container}>
        <Text style={{color: 'lawngreen'}}>CHOOSE YOUR CITY:</Text>
        <TextInput onSubmitEditing = {() => show()} onChangeText={newText => setCity(newText)} style={{backgroundColor: 'darkgrey', width: "40%", marginTop: "3%", textAlign:"center"}}></TextInput>
        <StatusBar style="auto" />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
});