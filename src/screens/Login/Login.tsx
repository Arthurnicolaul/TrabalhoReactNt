import Ionicons from '@expo/vector-icons/Ionicons';
import { Link, useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { propsStack } from '../../models';
import { styles } from "./style";

const Login: React.FC = () => {
  const navigation = useNavigation<propsStack>()


  return (
  <SafeAreaView style= {styles.container}>

    <View style= {styles.boxLogin}>

    <Text style= {styles.title}>Digite seu número de celular</Text>
    <View style= {styles.boxInput}>
      <View style= {styles.country}>
      <Image style={{ width:24,height:20, justifyContent: 'center', marginTop: 5}} source={require("../../../assets/icons8-brazil-48.png")}/>
      <Ionicons style={{textAlign: 'right', marginBottom:5, justifyContent:'center'}} name="caret-down-outline" size={10} color="black"/>
      </View>
      <TextInput style= {styles.number} keyboardType="numeric">

      </TextInput>
    </View>

    <TouchableOpacity style= {styles.buttonNumber} onPress={() => navigation.navigate("Map")}>
      <Text style={{color: 'white', }}>Continuar</Text>
    </TouchableOpacity>

    <View style={styles.boxOr}>
      <View style={{ height:4, backgroundColor: '#DADDDA'}}>
      </View>
     <Text style={{color: '#8E918E'}}>
      -------------------------------- ou -------------------------------
     </Text>
      <View style={{ height:4, backgroundColor: '#DADDDA'}}></View>
    </View>

    <TouchableOpacity style={{backgroundColor: '#dddd', padding: 10, alignItems: 'center', justifyContent: 'center', borderRadius: 15, flexDirection: 'row'}}>
      <Image style={{width: 25, height: 25, marginRight: 5}} source={require("../../../assets/logoGoogle.png")}></Image>
      <Text style={{fontFamily: 'Montserrat_800ExtraBold'}}>Continuar com Google</Text>
    </TouchableOpacity>

    <TouchableOpacity style={{backgroundColor: '#dddd', padding: 10, alignItems: 'center', justifyContent: 'center', borderRadius: 15, flexDirection: 'row', marginTop: 10}}>
      <Image style={{backgroundColor:'#fff',width: 25, height: 25, marginRight: 5}} source={require("../../../assets/logoFacebook.png")}></Image>
      <Text style={{fontFamily: 'Montserrat_800ExtraBold'}}>Continuar com a Facebook</Text>
    </TouchableOpacity>

    <TouchableOpacity style={{backgroundColor: '#dddd', padding: 10, alignItems: 'center', justifyContent: 'center', borderRadius: 15, flexDirection: 'row', marginTop: 10}}>
      <Image style={{width: 25, height: 25, marginRight: 5}} source={require("../../../assets/email.png")}></Image>
      <Text style={{fontFamily: 'Montserrat_800ExtraBold'}}>Continuar com a E-mail</Text>
    </TouchableOpacity>

    <Text style={{color: '#8E918E',marginTop: 10}}>
      -------------------------------- ou -------------------------------
     </Text>
    
    <Link to="/" style={{textDecorationLine:'none', textAlign: 'center', marginVertical: 25, marginTop:1}}> <Image  style={{}} source={require("../../../assets/Vector.png")}></Image>  Encontrar Minha Conta</Link>

    <Text style={{color: '#8E918E', fontSize:14, }}>Ao continuar, voce concorda em receber chamadas e mensagens SMS ou pelo WhatsApp, inclusive automaticas, da Uber e de suas afiliadas, no numero informado</Text>
    </View>


    <Text style={{}}>
      <Text style={{color: '#8E918E', fontSize:12}}>Esse site é protegido pelo reCAPTCHA e segue </Text>  
      <Link to="/" style={{textDecorationLine:'underline', fontSize:10,marginRight:20}}>Política de privacidade</Link>
      <Text style={{color: '#8E918E', fontSize:12}}> e os </Text>
      <Link to="/" style={{textDecorationLine:'underline', fontSize:10,marginRight:20}}>Termos de uso</Link>
      <Text style={{color: '#8E918E', fontSize:12}}> do Google</Text>
      </Text>
    

    <StatusBar style='auto'/>    
    </SafeAreaView>
    );
}

export default Login;