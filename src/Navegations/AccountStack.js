import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import ConfirmNumber from "../Screens/Accounts/ConfirmNumber";
import SendConfirm from "../Screens/Accounts/SendConfirm";

const Stack = createStackNavigator();

export default function MyShopStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          component={SendConfirm}
          name="send-confirm"
          options={{
            title: "Confirma tu número de telefono",
            headerStyle: {
              backgroundColor: "#128c7E",
              headerTintColor: "#fff",
            },
          }}
        />
        <Stack.Screen
          component={ConfirmNumber}
          name="onfirm-phone"
          options={{
            title: "Confirma número",
            headerStyle: {
              backgroundColor: "#128c7E",
              headerTintColor: "#fff",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
