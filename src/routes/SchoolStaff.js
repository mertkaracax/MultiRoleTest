import React from "react";
import { Switch } from "react-router-native";
import SchoolStaffScreen from "../pages/SchoolStaff/Home";
import RouteWithLayout from "./RouteWithLayout";

const SchoolStaff = () => {
  return (
    <Switch>
      <RouteWithLayout path="/">
        <SchoolStaffScreen />
      </RouteWithLayout>
    </Switch>
  );
};

export default SchoolStaff;
