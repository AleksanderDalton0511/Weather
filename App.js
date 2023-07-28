import GeoLocation from 'react-native-geolocation-service';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, PermissionsAndroid, Image } from 'react-native';
import React, { useState } from 'react';
import { DataTable } from 'react-native-paper';
export default function App() {
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
  } catch (error) {
    console.error(error);
  }
  }
  function show(){
    request();
    setSelected(true);
  }

    const [usePosition, setPosition] = useState();
    
    const getDeviceCurrentLocation = async () => {
      request2();
      setSelected(true);
      return new Promise((resolve, reject) =>
        GeoLocation.getCurrentPosition(
          (position) => {
            resolve(position);
            setPosition(position);
          },
          (error) => {
            reject(error);
          },
          {
            enableHighAccuracy: true, // Whether to use high accuracy mode or not
            timeout: 15000, // Request timeout
            maximumAge: 10000 // How long previous location will be cached
          }
        )
      );
    };

  const [selected, setSelected] = useState(false);

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

      </View>
    )}
    catch (error) {
      return (
        <View style={styles.container}>
          <Text style={{color: 'lawngreen'}}>CHOOSE YOUR CITY:</Text>
          <TextInput onSubmitEditing = {() => show()} onChangeText={newText => setCity(newText)} style={{backgroundColor: 'darkgrey', width: "40%", marginTop: "3%", textAlign:"center", color: "lawngreen"}}></TextInput>
          <Text style={{color: "red"}}>Such city does not exist!</Text>
          <TouchableOpacity style={{marginTop: "2%", backgroundColor: "darkgrey", borderColor: "lawngreen", borderStyle: "solid", borderWidth: 2}} onPress={getDeviceCurrentLocation}><Text style={{margin: "2%", color: "lawngreen"}}>MY POSITION</Text></TouchableOpacity>
        </View>
      );
    }
  }
  else{
    return (
      <View style={styles.container}>
        <Text style={{color: 'lawngreen'}}>CHOOSE YOUR CITY:</Text>
        <TextInput onSubmitEditing = {() => show()} onChangeText={newText => setCity(newText)} style={{backgroundColor: 'darkgrey', width: "40%", marginTop: "3%", textAlign:"center", color: "lawngreen"}}></TextInput>
        <TouchableOpacity style={{marginTop: "6%", backgroundColor: "darkgrey", borderColor: "lawngreen", borderStyle: "solid", borderWidth: 2}} onPress={getDeviceCurrentLocation}><Text style={{margin: "2%", color: "lawngreen"}}>MY POSITION</Text></TouchableOpacity>
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