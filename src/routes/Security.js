import React from "react";
import { Switch } from "react-router-native";
import HomeScreen from "../pages/Security/Home";
import RouteWithLayout from "./RouteWithLayout";

const Security = () => {
  return (
    <Switch>
      <RouteWithLayout path="/">
        <HomeScreen />
      </RouteWithLayout>
    </Switch>
  );
};

export default Security;
