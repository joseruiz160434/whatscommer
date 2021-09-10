import React, { useEffect, useState } from "react";

import Loading from "../Components/Loading";
import AccountStack from "./AccountStack";
import AuthenticatedRoutes from "./AuthenticatedRoutes";
import { validatePhone } from "../Utils/Actions";

export default function SwitchNavigator() {
  const [phoneAuth, setPhoneAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    validatePhone(setPhoneAuth);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  if (loading) {
    return <Loading isVisible={loading} text="Cargando Configuración..." />;
  } else {
    return phoneAuth ? <AuthenticatedRoutes /> : <AccountStack />;
  }
}
