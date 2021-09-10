import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Loading from "./src/Components/Loading";
// import AuthenticatedRoutes from "./src/Navegations/AuthenticatedRoutes";
import UnauthenticatedRoutes from "./src/Navegations/UnauthenticatedRoutes";
import SwitchNavigator from "./src/Navegations/SwitchNavigator";
import { validateSession } from "./src/Utils/Actions";

export default function App() {
  const [user, setUser] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    validateSession(setUser);
    setLoading(false);
  }, []);

  if (loading) {
    return <Loading isVisible={loading} text="cargando..." />;
  }

  return user ? <SwitchNavigator /> : <UnauthenticatedRoutes />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
