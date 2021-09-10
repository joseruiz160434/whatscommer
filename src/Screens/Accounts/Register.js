import React, { useRef } from "react";
import { View, Text, StyleSheet, Image, StatusBar } from "react-native";

import Toast from "react-native-easy-toast";

import RegisterForm from "../../Components/RegisterForm";

export default function Register() {
  const toastRef = useRef();
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#128C73" />
      <Image
        source={require("../../../assets/logo.png")}
        style={styles.imgLogo}
      />
      <Text style={styles.textoBanner}>Crear Cuenta</Text>
      <RegisterForm toastRef={toastRef} />
      <Toast ref={toastRef} position="center" opacity={0.9} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#128C73",
  },
  imgLogo: {
    width: 106,
    height: 106,
    marginTop: 40,
    alignSelf: "center",
  },
  textoBanner: {
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: 30,
    color: "#fff",
    alignSelf: "center",
  },
});
