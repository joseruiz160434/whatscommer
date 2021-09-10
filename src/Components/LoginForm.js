import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import { isEmpty } from "lodash";
import { Icon, Input, Button, Divider } from "react-native-elements";
import { useNavigation } from "@react-navigation/core";
import * as firebase from "firebase";

import { validarEmail } from "../Utils/Utils";
import Loading from "../Components/Loading";

export default function LoginForm(props) {
  const { toastRef } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const iniciarSesion = () => {
    if (isEmpty(email) || isEmpty(password)) {
      toastRef.current.show("Debe ingresar el correo y la password");
    } else if (!validarEmail(email)) {
      toastRef.current.show("El correo no es correcto");
    } else {
      setLoading(true); //mostrar loading
      //Si se cumple con signInWithEmailAndPassword envio los parametros
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          setLoading(false); //quitar loading
          toastRef.current.show("Ha iniciado sesión exitosamente");
          console.log(firebase.auth().currentUser);
        })
        .catch((err) => {
          setLoading(false);
          console.log(err);
          toastRef.current.show("Ha ocurrido un error, intentelo más tarde");
        });
    }
  };

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
        onChangeText={(text) => {
          setEmail(text);
        }}
        value={email}
        leftIcon={{
          type: "material-community",
          name: "account-circle-outline",
          color: "#128c7e",
        }}
        rightIcon={{
          type: "material-community",
          name: "at",
          color: "#128c7e",
        }}
      />
      <Input
        placeholder="Contraseña"
        containerStyle={styles.input}
        secureTextEntry={!show}
        onChangeText={(text) => setPassword(text)}
        value={password}
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
        title="Entrar"
        containerStyle={styles.BtnEntrar}
        buttonStyle={{ backgroundColor: "#25D366" }}
        onPress={() => iniciarSesion()}
      />
      <Text style={styles.txtCrearCuenta}>
        ¿No tienes cuenta?
        <Text
          style={styles.cuenta}
          onPress={() => navigation.navigate("register")}
        >
          {" "}
          Crear cuenta
        </Text>
      </Text>
      <Divider
        style={{
          backgroundColor: "#128C7E",
          height: 1,
          width: "90%",
          marginTop: 20,
        }}
      />
      <Text style={styles.txtO}>O</Text>
      <View style={styles.btnLogin}>
        <TouchableOpacity style={styles.btnLoginSocial}>
          <Icon
            size={24}
            type="material-community"
            name="google"
            color="#fff"
            backgroundColor="transparent"
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnLoginSocial}>
          <Icon
            size={24}
            type="material-community"
            name="facebook"
            color="#fff"
            backgroundColor="transparent"
          />
        </TouchableOpacity>
      </View>
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
  txtCrearCuenta: {
    marginTop: 20,
  },
  cuenta: {
    color: "#128c7e",
    fontFamily: "Roboto",
    fontSize: 18,
  },
  txtO: {
    fontSize: 20,
    fontWeight: "bold", //colocar negrita
    marginTop: 10,
    color: "#128c7e",
  },
  btnLogin: {
    flexDirection: "row",
    justifyContent: "space-around", //pa separarlo un poco
    width: "100%",
  },
  btnLoginSocial: {
    backgroundColor: "#25d366",
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 10,
    margin: 10,
  },
});
