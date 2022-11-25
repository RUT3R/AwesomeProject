import React from 'react';

import {
  Text,
  View,
  ScrollView,
} from 'react-native';

const Match = (props) => {
  return (
    <View style={{marginBottom: 10}}>
      <Text style={{color: "white", textAlign: "center", fontSize: 24}}>{props.team1} vs {props.team2}</Text>
      <Text style={{color: "white", textAlign: "center" }}>{props.date} {props.time}</Text>
    </View>
  );
}


const App = () => {
  
  return (
    <ScrollView style={{
      backgroundColor:'red',
      height: "100%",
      
      }}>
        <Match team1="Anglia" team2="USA" date="25-11-2022" time="20:00"/>
        <Match team1="Anglia" team2="USA" date="25-11-2022" time="20:00"/>
        <Match team1="Anglia" team2="USA" date="25-11-2022" time="20:00"/>
        <Match team1="Anglia" team2="USA" date="25-11-2022" time="20:00"/>
        <Match team1="Anglia" team2="USA" date="25-11-2022" time="20:00"/>
        <Match team1="Anglia" team2="USA" date="25-11-2022" time="20:00"/>
        <Match team1="Anglia" team2="USA" date="25-11-2022" time="20:00"/>
        <Match team1="Anglia" team2="USA" date="25-11-2022" time="20:00"/>
        <Match team1="Anglia" team2="USA" date="25-11-2022" time="20:00"/>



    </ScrollView>
  );
};

export default App;
