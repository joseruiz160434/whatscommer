import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import MyShop from "../Screens/MyShop/MyShop";
import EditProduct from "../Screens/MyShop/EditProduct";

const Stack = createStackNavigator();

export default function MyShopStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        //para dar opciones de la pantalla de forma global
        headerStyle: { backgroundColor: "#128c7E" }, //darle el color al background donde va el titulo
        headerTintColor: "#fff",
      }}
    >
      <Stack.Screen
        component={MyShop}
        name="my-shopssss"
        options={{ title: "Mi tienda" }} //este es el 2 titulo encerrado en el background
      />
      <Stack.Screen
        component={EditProduct}
        name="edit-product"
        options={{ title: "Editar Producto" }}
      />
    </Stack.Navigator>
  );
}
