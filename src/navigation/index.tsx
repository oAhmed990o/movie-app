import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import SearchScreen from '../screens/SearchScreen';

const Stack = createNativeStackNavigator();

export default function AppNav() {
  return (
      <NavigationContainer>
        <Stack.Navigator 
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="HS"
        >
          <Stack.Screen name="HS" component={HomeScreen} />
          <Stack.Screen name="DS" component={DetailScreen} />
          <Stack.Screen name="SS" component={SearchScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
