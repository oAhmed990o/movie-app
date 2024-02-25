import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Onboarding from '../components/Onboarding';
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
          style={{flex: 1,}}
          initialRouteName="Ob"
        >
          <Stack.Screen name="Ob" component={Onboarding} />
          <Stack.Screen name="DS" component={DetailScreen} />
          <Stack.Screen name="SS" component={SearchScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
