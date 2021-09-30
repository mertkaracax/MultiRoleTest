import React from "react";
import { Switch } from "react-router-native";
import HostessScreen from "../pages/Hostess/Home";
import RouteWithLayout from "./RouteWithLayout";

const Hostess = () => {
  return (
    <Switch>
      <RouteWithLayout path="/">
        <HostessScreen />
      </RouteWithLayout>
    </Switch>
  );
};

export default Hostess;
