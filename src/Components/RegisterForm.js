import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import { isEmpty, size } from "lodash";
import { Icon, Input, Button, Divider } from "react-native-elements";
import { useNavigation } from "@react-navigation/core";
import * as firebase from "firebase";

import { validarEmail } from "../Utils/Utils";
import Loading from "../Components/Loading";

export default function RegisterForm(props) {
  const { toastRef } = props;
  const [email, setEmail] = useState();
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  function createAccount() {
    console.log(password, "con");
    console.log(repeatPassword, "repe");
    console.log(email, "cor");
    if (isEmpty(email) || isEmpty(password) || isEmpty(repeatPassword)) {
      toastRef.current.show("Todos los campos son obligatorios");
    } else if (!validarEmail(email)) {
      toastRef.current.show("El correo no es valido");
    } else if (password !== repeatPassword) {
      toastRef.current.show("Las contraseñas tienen que ser iguales");
    } else if (size(password) < 6) {
      toastRef.current.show("La contraseña debe tener al menos 6 carácteres");
    } else {
      setLoading(true); //pa que se muestre el loading
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((response) => {
          toastRef.current.show("Se ha creado el usuario correctamente");
          setLoading(false); //pa que quite el loading
        })
        .catch((err) => {
          setLoading(false);
          toastRef.current.show("Ha ocurrido un error, intentelo más tarde");
        });
    }
  }

  return (
    <View style={styles.container}>
      <View
        style={{
          //pa crear la linea encima
          borderBottomColor: "#25D366",
          borderBottomWidth: 2,
          width: 100,
        }}
      />
      <Input
        placeholder="Correo"
        containerStyle={styles.input}
        value={email}
        onChangeText={(text) => {
          setEmail(text);
        }}
        leftIcon={{
          type: "material-community",
          name: "account-circle-outline",
          color: "#128c7e",
        }}
        rightIcon={{
          type: "material-community",
          name: "at",
          color: "#128c7e",
          onPress: () => alert("Hola"),
        }}
      />
      <Input
        placeholder="Contraseña"
        containerStyle={styles.input}
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry={!show}
        leftIcon={{
          type: "material-community",
          name: "security",
          color: "#128c7e",
        }}
        rightIcon={{
          type: "material-community",
          name: show ? "eye-off-outline" : "eye-outline",
          color: "#128c7e",
          onPress: () => setShow(!show),
        }}
      />
      <Input
        placeholder="Repetir Contraseña"
        containerStyle={styles.input}
        onChangeText={(text) => {
          setRepeatPassword(text);
        }}
        value={repeatPassword}
        secureTextEntry={!show}
        leftIcon={{
          type: "material-community",
          name: "security",
          color: "#128c7e",
        }}
        rightIcon={{
          type: "material-community",
          name: show ? "eye-off-outline" : "eye-outline",
          color: "#128c7e",
          onPress: () => setShow(!show),
        }}
      />
      <Button
        title="Crear Cuenta"
        containerStyle={styles.BtnEntrar}
        buttonStyle={{ backgroundColor: "#25D366" }}
        onPress={() => createAccount()}
      />
      <Button
        title="Iniciar sesión"
        containerStyle={styles.BtnEntrar}
        buttonStyle={{ backgroundColor: "#25D366" }}
        onPress={() => navigation.goBack()} //para ir atras
      />
      <Loading isVisible={loading} text="Por favor espere" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F6F8",
    marginTop: 20, //separar un poco lo blanco del bienvenido
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    alignItems: "center", //pa colocar texto en el centro
    paddingTop: 20,
  },
  input: {
    width: "90%",
    marginTop: 20,
    height: 50,
  },
  BtnEntrar: {
    width: "90%",
    marginTop: 20,
  },
});
