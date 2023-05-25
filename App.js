import { View } from "react-native";
import React from "react";

import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { LoginScreen } from "../screens/LoginScreen";
import { useNavigation } from "@react-navigation/native";
import { Dashboard } from "./screens/Dashboard";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
