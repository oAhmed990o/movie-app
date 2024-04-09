import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import DetailScreen from "../screens/DetailScreen";
import SearchScreen from "../screens/SearchScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import "react-native-get-random-values";

const Stack = createNativeStackNavigator();

export default function AppNav() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="LS"
      >
        <Stack.Screen name="LS" component={LoginScreen} />
        <Stack.Screen name="RS" component={RegisterScreen} />
        <Stack.Screen name="HS" component={HomeScreen} />
        <Stack.Screen name="SS" component={SearchScreen} />
        <Stack.Screen name="DS" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
