import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import { Header } from "react-native/Libraries/NewAppScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function AppNavigation() {
  function HomeStack() {
    return (
      <Stack.Navigator screenOptions={
       {headerShown: false} 
      }
        initialRouteName="HomeTab"
      >
        <Stack.Screen name="HomeTab" component={HomeTabs}/>
      </Stack.Navigator>
    );
  }

  function HomeTabs() {
    return (
      <Tab.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}/>
        {/* <Stack.Screen name="Search" component={SearchScreen}/> */}
        {/* <Stack.Screen name="Saved" component={SavedScreen}/> */}
      </Tab.Navigator>
    );
  }
  
  return (
    <NavigationContainer>
      <HomeStack/>
    </NavigationContainer>
  );
}
