import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight, // boton que al presionarlo se pone de un color o de otro
} from "react-native";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

export default function ShopButton() {
  const navigation = useNavigation(); //para poder llamar a nuestra pantalla
  return (
    <TouchableHighlight
      style={styles.container}
      onPress={() => {
        navigation.navigate("my-shop");
      }}
    >
      <Icon name="store" color="#fff" size={30} />
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#25d366",
    alignItems: "center",
    justifyContent: "center",
    width: 72,
    height: 72,
    borderRadius: 36,
    top: -10,
    shadowRadius: 5,
    shadowOffset: { height: 10, width: 10 },
    shadowOpacity: 0.3, //opacidad de la sombra
    borderWidth: 3, //ancho del borde
    borderColor: "#fff", //color del borde
    padding: 20,
  },
});
