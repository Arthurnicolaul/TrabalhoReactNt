import { FontAwesome5 } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from "react-native";




// import { Container } from './styles';
const Bar = () => {

  const [cumprimentar, setCumprimentar] = useState("")

  const data = [
    {
      id: "1",
      icon: "home",
      location: "Home",
      destination: "Palm Height apartment, Thu Duc City",
    },
    {
      id: "2",
      icon: "briefcase",
      location: "Work",
      destination: "Vinhome, Binh Thanh District",
    },
    {
      id: "3",
      icon: "plane",
      location: "Travel",
      destination: "Tan Son Nhat Airpot, Tan Binh District",
    },
  ];

  useEffect(() => {
    const hrs = new Date().getHours();
    if (hrs < 12) setCumprimentar("Bom dia");
    else if (hrs >= 12 && hrs <= 17) setCumprimentar("Boa tarde");
    else if (hrs >= 17 && hrs <= 24) setCumprimentar("Boa noite");
  }, []);
  return(
    <FlatList
  data={data}
  keyExtractor={(item) => item.id}

  renderItem={({ item }) => (
    <TouchableOpacity style={{alignItems: 'center', flexDirection: "row", padding: 15}}>
      <View style={{backgroundColor: '#CDCED5', borderRadius: 50, padding: 15, marginRight: 7}}>
        <FontAwesome5 name={item.icon} size={24} color="black" />
      </View>
      <View>
        <Text style={{color: '#0F1016', fontWeight: '700', marginBottom: 3}}>{item.location}</Text>
        <Text style={{color: '#b9babd', fontWeight: '600'}}>{item.destination}</Text>
      </View>
    </TouchableOpacity>
  )}/>
  )
}
export default Bar