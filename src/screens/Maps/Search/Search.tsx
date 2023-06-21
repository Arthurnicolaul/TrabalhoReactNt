import { Component } from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'



export default class Search extends Component {
  render() {
    return <GooglePlacesAutocomplete
      styles={{
      container: {
      flex: 0,
      backgroundColor: "white",
      marginLeft: 20,
      marginRight: 20,
      marginTop: 10,
},
      textInput: {
      fontSize: 23,
      borderRadius: 5,
      width: 200,
      backgroundColor: "lightgray",
},
      textInputContainer: {
      paddingBottom: 0,
      },
}}
      placeholder="Para onde?"
      nearbyPlacesAPI="GooglePlacesSearch"
      query={{
      key: process.env.GOOGLE_MAP_API,
      language: "pt-br",
}}
    textInputProps={{
      autoCapitalize: "none"
    }}
    fetchDetails={true}
    enablePoweredByContainer={false}
  />
  }
}