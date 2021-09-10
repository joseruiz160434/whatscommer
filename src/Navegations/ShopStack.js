import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Shop from "../Screens/Shop/Shop";
import AddProduct from "../Screens/Shop/AddProduct";
import Contact from "../Screens/Shop/Contact";
import MessagesList from "../Screens/Shop/MessagesList";
import Detail from "../Screens/Shop/Detail";

const Stack = createStackNavigator();

//estas son las parte de arriba el encabezado
export default function ShopStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={Shop}
        name="tienda"
        options={{ headerShown: false }} //headerShow para no mostrar el headers
      />
      <Stack.Screen
        component={AddProduct}
        name="add-product"
        options={{
          title: "Agregar nuevo Producto",
          headerStyle: { backgroundColor: "#128c7e" }, //pa añadirle color al encabezado
          headerTintColor: "#fff", //color de la letra
        }}
      />
      <Stack.Screen
        component={Detail}
        name="detail"
        options={{
          title: "",
          headerTransparent: true, //pa queel encabezado quede transparente
          headerTintColor: "#128c7e",
        }}
      />
      <Stack.Screen
        component={MessagesList}
        name="messages"
        options={{
          title: "Mensajes",
          headerStyle: { backgroundColor: "#128c7e" }, //pa añadirle color al encabezado
          headerTintColor: "#fff", //color de la letra
        }}
      />
      <Stack.Screen
        component={Contact}
        name="contact"
        options={{
          title: "Mensajes",
          headerStyle: { backgroundColor: "#128c7e" }, //pa añadirle color al encabezado
          headerTintColor: "#fff", //color de la letra
        }}
      />
    </Stack.Navigator>
  );
}
