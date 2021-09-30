import React from "react";
import { Switch } from "react-router-native";
import ParentScreen from "../pages/Parent/Home";
import RouteWithLayout from "./RouteWithLayout";

const Parent = () => {
  return (
    <Switch>
      <RouteWithLayout path="/">
        <ParentScreen />
      </RouteWithLayout>
    </Switch>
  );
};

export default Parent;
