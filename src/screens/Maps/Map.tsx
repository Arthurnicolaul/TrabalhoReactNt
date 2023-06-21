import React, { Component } from 'react';
import { View } from "react-native";
import MapView from 'react-native-maps';
import Bar from './Bar/Bar';
import Search from './Search/Search';


  export default class Map extends Component{
    state = {
      region:null
    }
    async componentDidMount(){
      navigator.geolocation.getCurrentPosition(
        ({coords: {latitude,longitude}}) => {
          this.setState({ 
              region:
              latitude,
              longitude,
              latitudeDelta: 0.0143,
              longitudeDelta: 0.0134})
        },
        () => {},
        {
          timeout: 2000,
          enableHighAccuracy: true,
          maximumAge: 1000,
        }
      )
    }
  render(){
    const {region} = this.state
    return(
    <View style={{flex:7}}>
    <MapView
      style={{flex:7}}
      region={{latitude: -21.975700822087052, longitude: -42.35032670853889, latitudeDelta: 0.0143, longitudeDelta: 0.0134}}
      showsUserLocation
      loadingEnabled
    />
    <Search></Search>
    <Bar></Bar>
  </View>
    )
  }
}
