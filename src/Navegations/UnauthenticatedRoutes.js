//este es el componente padre
import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Login from "../Screens/Accounts/Login";
import Register from "../Screens/Accounts/Register";
import RestorePassword from "../Screens/Accounts/RestorePassword";

const Stack = createStackNavigator();

export default function UnauthenticatedRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="login" //para mostrar una pantalla por defecto
        screenOptions={{ headerShown: false }} //headerShown para que estas pantallas no tengan un headers
      >
        <Stack.Screen component={Login} name="login" />
        <Stack.Screen component={Register} name="register" />
        <Stack.Screen component={RestorePassword} name="lost-password" />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
