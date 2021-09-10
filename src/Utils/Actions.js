import { firebaseApp } from "./Firebase";
import * as firebase from "firebase";

//recibe de app.js
export const validateSession = (setValidateSession) => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // console.log("autenticado");
      setValidateSession(true);
    } else {
      // console.log("no autenticado");
      setValidateSession(false);
    }
  });
};

export const cerrarSesion = () => {
  firebase.auth().signOut();
};

//parametro de SwitchNavigator
export const validatePhone = (setPhoneAuth) => {
  firebase.auth().onAuthStateChange((user) => {
    if (user.phoneNumber) {
      setPhoneAuth(true); // si user.phoneNumber tiene valor cambie el valor a true
    }
  });
};
