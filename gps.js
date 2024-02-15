import { BackHandler } from "react-native";
import { StatusBar } from 'expo-status-bar';
import * as NavigationBar from "expo-navigation-bar";
import * as Location from 'expo-location';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, PermissionsAndroid, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import { DataTable } from 'react-native-paper';

export default function Gps() {
  
  const[results, setResults] = useState([]);
  const[city, setCity] = useState('');
  const[isDaily, setDaily] = useState(false);
  let margin = "20%";
const request = async () => {const url = 'https://weatherapi-com.p.rapidapi.com/forecast.json?q=' + city + '&days=3';
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

NavigationBar.setVisibilityAsync("hidden");
NavigationBar.setBehaviorAsync("overlay-swipe");

  const request2 = async () => {const url = 'https://weatherapi-com.p.rapidapi.com/forecast.json?q=' + usePosition.coords.latitude+","+usePosition.coords.longitude + '&days=3';
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
    setSelected(true);
    setSafer(false);
  } catch (error) {
    console.error(error);
  }
  }
  function show(){
    request();
    setSelected(true);
  }

    const [usePosition, setLocation] = useState(null);

    const [trigger, setTrigger] = useState(false);

    async function MyLocation() {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
      setSafer(true);
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      setTrigger(true);
    };

    function handleBackButtonClick() {
      setSelectedFalse();
      return true;
    }
    
    useEffect(() => {
      BackHandler.addEventListener("hardwareBackPress", handleBackButtonClick);
      return () => {
        BackHandler.removeEventListener("hardwareBackPress", handleBackButtonClick);
      };
    }, []);

  const [selected, setSelected] = useState(false);
  const [safer, setSafer] = useState(true);

  useEffect(() => {
    (async () => {
      if(safer){
      request2();
      }
      else{
        setSelected(false);
        setDaily(false);
      }
    })();
  }, [trigger]);

  let word;
  if (selected){
    if (isDaily){
      word = "TODAY";
      margin = "90%";
      }
      else{
        word = "DAILY";
      }
    try{
      const locat = <Text style={{color: "red"}}>{results.location.name}</Text>

      function setSelectedFalse(){
        setSelected(false);
        setDaily(false);
        setTrigger(false);
      }

      let data;
      if(isDaily){
        data = <DataTable style={{marginTop: "5%", backgroundColor: "#7B858D"}}>

        <DataTable.Row>
        <DataTable.Cell><Text style={{color: "white"}}>TODAY</Text></DataTable.Cell>
        <DataTable.Cell><Text style={{color: "red"}}>{results.forecast.forecastday[0].day.avgtemp_c} C</Text></DataTable.Cell>
        <Image source = {{uri:'https:' + results.forecast.forecastday[0].day.condition.icon, width: 45, height: 45}}/>
      </DataTable.Row>

      <DataTable.Row>
      <DataTable.Cell><Text style={{color: "white"}}>TOMORROW</Text></DataTable.Cell>
        <DataTable.Cell><Text style={{color: "red"}}>{results.forecast.forecastday[1].day.avgtemp_c} C</Text></DataTable.Cell>
        <Image source = {{uri:'https:' + results.forecast.forecastday[1].day.condition.icon, width: 45, height: 45}}/>
      </DataTable.Row>

      <DataTable.Row>
      <DataTable.Cell><Text style={{color: "white"}}>AFTERTOMORROW</Text></DataTable.Cell>
        <DataTable.Cell><Text style={{color: "red"}}>{results.forecast.forecastday[2].day.avgtemp_c} C</Text></DataTable.Cell>
        <Image source = {{uri:'https:' + results.forecast.forecastday[2].day.condition.icon, width: 45, height: 45}}/>
      </DataTable.Row>

      
    </DataTable>
      }
      else{
        data = <DataTable style={{marginTop: "5%", backgroundColor: "#7B858D"}}>

        <DataTable.Row>
        <DataTable.Cell><Text style={{color: "white"}}>00:00</Text></DataTable.Cell>
        <DataTable.Cell><Text style={{color: "red"}}>{results.forecast.forecastday[0].hour[0].temp_c} C</Text></DataTable.Cell>
        <Image source = {{uri:'https:' + results.forecast.forecastday[0].hour[0].condition.icon, width: 45, height: 45}}/>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell><Text style={{color: "white"}}>03:00</Text></DataTable.Cell>
        <DataTable.Cell><Text style={{color: "red"}}>{results.forecast.forecastday[0].hour[3].temp_c} C</Text></DataTable.Cell>
        <Image source = {{uri:'https:' + results.forecast.forecastday[0].hour[3].condition.icon, width: 45, height: 45}}/>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell><Text style={{color: "white"}}>06:00</Text></DataTable.Cell>
        <DataTable.Cell><Text style={{color: "red"}}>{results.forecast.forecastday[0].hour[6].temp_c} C</Text></DataTable.Cell>
        <Image source = {{uri:'https:' + results.forecast.forecastday[0].hour[6].condition.icon, width: 45, height: 45}}/>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell><Text style={{color: "white"}}>09:00</Text></DataTable.Cell>
        <DataTable.Cell><Text style={{color: "red"}}>{results.forecast.forecastday[0].hour[9].temp_c} C</Text></DataTable.Cell>
        <Image source = {{uri:'https:' + results.forecast.forecastday[0].hour[9].condition.icon, width: 45, height: 45}}/>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell><Text style={{color: "white"}}>12:00</Text></DataTable.Cell>
        <DataTable.Cell><Text style={{color: "red"}}>{results.forecast.forecastday[0].hour[12].temp_c} C</Text></DataTable.Cell>
        <Image source = {{uri:'https:' + results.forecast.forecastday[0].hour[12].condition.icon, width: 45, height: 45}}/>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell><Text style={{color: "white"}}>15:00</Text></DataTable.Cell>
        <DataTable.Cell><Text style={{color: "red"}}>{results.forecast.forecastday[0].hour[15].temp_c} C</Text></DataTable.Cell>
        <Image source = {{uri:'https:' + results.forecast.forecastday[0].hour[15].condition.icon, width: 45, height: 45}}/>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell><Text style={{color: "white"}}>18:00</Text></DataTable.Cell>
        <DataTable.Cell><Text style={{color: "red"}}>{results.forecast.forecastday[0].hour[18].temp_c} C</Text></DataTable.Cell>
        <Image source = {{uri:'https:' + results.forecast.forecastday[0].hour[18].condition.icon, width: 45, height: 45}}/>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell><Text style={{color: "white"}}>21:00</Text></DataTable.Cell>
        <DataTable.Cell><Text style={{color: "red"}}>{results.forecast.forecastday[0].hour[21].temp_c} C</Text></DataTable.Cell>
        <Image source = {{uri:'https:' + results.forecast.forecastday[0].hour[21].condition.icon, width: 45, height: 45}}/>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell><Text style={{color: "white"}}>23:00</Text></DataTable.Cell>
        <DataTable.Cell><Text style={{color: "red"}}>{results.forecast.forecastday[0].hour[23].temp_c} C</Text></DataTable.Cell>
        <Image source = {{uri:'https:' + results.forecast.forecastday[0].hour[23].condition.icon, width: 45, height: 45}}/>
      </DataTable.Row>

    </DataTable>
      }
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={setSelectedFalse} style={{paddingTop: "1%", marginRight: "85%", marginTop: "5%"}}><Image style={{width: 40, height: 40}} source={require('./back.png')} /></TouchableOpacity>

        <DataTable>

        <DataTable.Row>
        <DataTable.Cell><Text style={{color: "white"}}>INFO</Text></DataTable.Cell>
        <DataTable.Cell><Text style={{color: "red"}}>{locat}</Text></DataTable.Cell>
        <DataTable.Cell><Text style={{color: "red"}}>{results.location.localtime}</Text></DataTable.Cell>
      </DataTable.Row>

        <DataTable.Row>
        <DataTable.Cell><Text style={{color: "white"}}>NOW</Text></DataTable.Cell>
        <DataTable.Cell><Text style={{color: "red"}}>{results.current.temp_c} C</Text></DataTable.Cell>
        <DataTable.Cell><Text style={{color: "red"}}>{results.current.condition.text}</Text></DataTable.Cell>
      </DataTable.Row>

        <DataTable.Row>
        <DataTable.Cell><Text style={{color: "white"}}>DAYTIME</Text></DataTable.Cell>
        <DataTable.Cell><Text style={{color: "red"}}>{results.forecast.forecastday[0].astro.sunrise}</Text></DataTable.Cell>
        <DataTable.Cell><Text style={{color: "red"}}>{results.forecast.forecastday[0].astro.sunset}</Text></DataTable.Cell>
      </DataTable.Row>

    </DataTable>

      <TouchableOpacity onPress={(prevCheck) => setDaily(prevCheck => !prevCheck)} style={{backgroundColor: "darkgrey", paddingRight: "5%", paddingLeft: "5%", paddingTop: "1%", paddingBottom: "1%", marginTop: `${ margin }`}}><Text style={{color: "red"}}>{word}</Text></TouchableOpacity>

    {data}
    <StatusBar hidden />
      </View>
    )}
    catch (error) {
      return (
        <View style={styles.container}>
          <Text style={{color: 'white'}}>CHOOSE YOUR CITY:</Text>
          <TextInput onSubmitEditing = {() => show()} onChangeText={newText => setCity(newText)} style={{backgroundColor: 'darkgrey', width: "40%", marginTop: "3%", textAlign:"center", color: "red"}}></TextInput>
          <Text style={{color: "red"}}>Such city does not exist!</Text>
          <TouchableOpacity style={{marginTop: "2%", backgroundColor: "#7B858D"}} onPress={MyLocation}><Text style={{margin: "2%", color: "red"}}>MY POSITION</Text></TouchableOpacity>
          <StatusBar hidden />
        </View>
      );
    }
  }
  else{
    return (
      <View style={styles.container}>
        <Text style={{color: 'white'}}>CHOOSE YOUR CITY:</Text>
        <TextInput onSubmitEditing = {() => show()} onChangeText={newText => setCity(newText)} style={{backgroundColor: 'darkgrey', width: "40%", marginTop: "3%", textAlign:"center", color: "red"}}></TextInput>
        <TouchableOpacity style={{marginTop: "6%", backgroundColor: "#7B858D"}} onPress={MyLocation}><Text style={{margin: "2%", color: "red"}}>MY POSITION</Text></TouchableOpacity>
        <StatusBar hidden />
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