import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator } from "@react-navigation/stack";
import { StyleSheet } from 'react-native';
import { propsNavigationStack } from './src/models';
import Login from './src/screens/Login/Login';
import Map from './src/screens/Maps/Map';


const Stack = createStackNavigator<propsNavigationStack>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login' screenOptions={{
        headerShown: false
        }}>
        <Stack.Screen 
        name="Login" 
        component={Login} 
        options={{cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS}}/>
        <Stack.Screen 
        name="Map" 
        component={Map} 
        options={{cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});