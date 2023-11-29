import { StatusBar } from 'expo-status-bar';
import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { HomeScreen } from "./src/pages/home";
import { NextScreen } from "./src/pages/sign-in-page";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: true }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="sign-in-page" component={NextScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
