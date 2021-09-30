import React from "react";
import { Switch } from "react-router-native";
import CompanyStaffHome from "../pages/CompanyStaff/Home";
import RouteWithLayout from "./RouteWithLayout";

const CompanyStaff = () => {
  return (
    <Switch>
      <RouteWithLayout path="/">
        <CompanyStaffHome />
      </RouteWithLayout>
    </Switch>
  );
};

export default CompanyStaff;
