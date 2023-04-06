import React, { useContext } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ProfileScreen from '../screens/ProfileScreen';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthContext } from '../auth/AuthContext';
import HomeNoAuth from '../screens/HomeNoAuth';
const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();
const NoLogueado = () => (
  <Tab.Navigator activeColor="#f0edf6"
    inactiveColor="#3e2465"
    screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarActiveTintColor:'#000000',
      tabBarInactiveTintColor:'#ffffff'
     // tabBarStyle: { color: '#e95b5b' },
    }}
    barStyle={{ backgroundColor: '#694fad' }}>
    <Tab.Screen name="HomeNoAuth" component={HomeNoAuth} options={{ tabBarStyle: { display: 'none' } }} />
    <Tab.Screen name="Login" component={LoginScreen} options={{ tabBarStyle: { display: 'none' } }} />
    <Tab.Screen name="Register" component={RegisterScreen} options={{ tabBarStyle: { display: 'none' } }} />
  </Tab.Navigator>
);

const Logueado = () => (
  <Tab.Navigator activeColor="#f0edf6"
    inactiveColor="#3e2465"
    screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle: { color: '#e95b5b' }
    }}
    barStyle={{ backgroundColor: '#694fad' }}>
    <Tab.Screen name="Home" component={HomeScreen} options={{
      showLabel: true,
      tabBarIcon: () => (
        <MaterialCommunityIcons name="home" 
        color="#e95b5b" 
        size={26} />
      ),
    }} />
    <Tab.Screen name="Profile" component={ProfileScreen} options={{
      tabBarIcon: () => (
        <MaterialCommunityIcons name="account"
         color="#e95b5b" 
         size={26} />
      ),
    }} />
  </Tab.Navigator>
);

export const Navigation = () => {
  const { user } = useContext(AuthContext);

  if (!user || !user.logged) {
    return (
      <NoLogueado />
    )
  }

  return (
    <Logueado />
  )
}