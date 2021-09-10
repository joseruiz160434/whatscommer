import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"; //este nos permite crear una barra en la parte de abajo de nuestra aplicacion
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Icon } from "react-native-elements";

import ShopStack from "./ShopStack"; //estas son los 3 navegadores principales que va a tener nuestra interfaz de usuario
import ProfileStack from "./ProfileStack";
import MyShopStack from "./MyShopStack";

//COMPONENTES
import ShopButton from "../Components/ShopButton";

//aqui est

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

//retorna todos nuestros elementos de TabBar esta es la parte de abajo
const TabBar = () => {
  return (
    <Tab.Navigator
      options={{ tabBarBadge: 3 }}
      initialRouteName="shop"
      //screenOptions recibe por defecto la ruta de la pantalla actual
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "#fff", // o inactiveTintColor para version anterior 5
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          //tabBarStyle para personalizar un poco el tabs o style para version anterior
          borderTopLeftRadius: 60,
          borderTopRightRadius: 60,
          alignItems: "center",
          backgroundColor: "#128C7E",
          paddingBottom: 5, //subir iconos
        },
        //tabBarIcon nos permite dibujar de una forma dinamica el icono para cada tabs. Recibe por defecto el color
        //y el tabBarIcon por cada  tab hace una funcion showIcon  que recibe la ruta y el color
        tabBarIcon: ({ color }) => showIcon(route, color),
      })}
    >
      <Tab.Screen
        component={ShopStack}
        name="shop"
        options={{ title: "Tienda" }}
      />
      <Tab.Screen
        component={MyShopStack}
        name="my-shop"
        options={{ title: "", tabBarIcon: () => <ShopButton /> }} //tabBarIcon para colocar el icono que esta en el componente ShopButton que alla lo personalizamos
      />
      <Tab.Screen
        component={ProfileStack}
        name="account"
        options={{ title: "Cuenta" }}
      />
    </Tab.Navigator>
  );
};

//showIcon recibe la ruta y el color
function showIcon(route, color) {
  let iconName = "";
  //en casa del nombre de la ruta  pone el icono
  switch (route.name) {
    case "shop":
      iconName = "cart-outline";
      break;
    case "account":
      iconName = "account-circle-outline";
      break;
    case "my-shop":
      iconName = "cart-outline";
      break;
  }
  //y aca retorna el icono
  return (
    <Icon type="material-community" name={iconName} size={24} color={color} />
  );
}

export default function AuthenticatedRoutes() {
  return (
    <NavigationContainer>
      <TabBar />
    </NavigationContainer>
  );
}
