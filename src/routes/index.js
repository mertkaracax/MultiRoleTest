import React from "react";
import { NativeRouter, Route, Switch } from "react-router-native";
import { REACT_APP_TYPE } from "@env";
import LoginScreen from "../pages/Login";
import RegisterScreen from "../pages/Register";
import RoleManagementScreen from "../pages/RoleManagement";
import Security from "./Security";
import Hostess from "./Hostess";
import Parent from "./Parent";
import SchoolStaff from "./SchoolStaff";
import CompanyStaff from "./CompanyStaff";
import SplashScreen from "../pages/Splash/SplashScreen";

import SchoolInfo from "../pages/CompanyStaff/SchoolInfo";
import DriverList from "../pages/CompanyStaff/DriverList";
import ChangeRequests from "../pages/CompanyStaff/ChangeRequests";
import HostessList from "../pages/CompanyStaff/HostessList";
import ServiceInfo from "../pages/CompanyStaff/ServiceInfo";
import ServiceList from "../pages/CompanyStaff/ServiceList";
import StudentList from "../pages/CompanyStaff/StudentList";
import CompanyStaffHome from "../pages/CompanyStaff/Home";
import StudentInfo from "../pages/CompanyStaff/StudentInfo";
import MapPage from "../pages/CompanyStaff/MapPage";
import ChangeRequestDetail from "../pages/CompanyStaff/ChangeRequestDetail";
import RouteMap from "../pages/CompanyStaff/RouteMap";
import RequestMap from "../pages/CompanyStaff/RequestMap";
import OfferNewStop from "../pages/CompanyStaff/OfferNewStop";

import SchoolInfoo from "../pages/SchoolStaff/SchoolInfo";
import SchoolStaffHome from "../pages/SchoolStaff/Home";
import StudentListt from "../pages/SchoolStaff/StudentList";
import StudentInfoo from "../pages/SchoolStaff/StudentInfo";
import ServiceListt from "../pages/SchoolStaff/ServiceList";
import ServiceInfoo from "../pages/SchoolStaff/ServiceInfo";
import ChangeRequestss from "../pages/SchoolStaff/ChangeRequests";
import ChangeRequestDetaill from "../pages/SchoolStaff/ChangeRequestDetail";
import MapPagee from "../pages/SchoolStaff/MapPage";
import RouteMapp from "../pages/SchoolStaff/RouteMap";

const distributeRoles = () => {
  console.log("APP:", REACT_APP_TYPE || "MULTIROLE");
  switch (REACT_APP_TYPE) {
    case "HOSTESS":
      return <Route path="/home" component={Hostess} />;
    case "SECURITY":
      return <Route path="/home" component={Security} />;
    case "PARENT":
      return <Route path="/home" component={Parent} />;
    case "COMPANY_STAFF":
      return <Route path="/home" component={CompanyStaff} />;
    case "SCHOOL_STAFF":
      return <Route path="/home" component={SchoolStaff} />;
    default:
      return (
        <Switch>
          <Route path="/security" component={Security} />
          <Route path="/hostess" component={Hostess} />
          <Route path="/parent" component={Parent} />
          <Route path="/schoolstaff" component={SchoolStaff} />
          <Route path="/companystaff" component={CompanyStaff} />
          <Route path="/home" component={RoleManagementScreen} />
        </Switch>
      );
  }
};

const App = () => {
  return (
    <NativeRouter>
      <Switch>
        <Route exact path="/login" component={LoginScreen} />
        <Route exact path="/register" component={RegisterScreen} />
        <Route exact path="/" component={SplashScreen} />

        <Route exact path="/schoolInfo" component={SchoolInfo} />
        <Route exact path="/changeRequests" component={ChangeRequests} />
        <Route exact path="/driverList" component={DriverList} />
        <Route exact path="/hostessList" component={HostessList} />
        <Route exact path="/serviceInfo" component={ServiceInfo} />
        <Route exact path="/serviceList" component={ServiceList} />
        <Route exact path="/studentList" component={StudentList} />
        <Route exact path="/csHome" component={CompanyStaffHome} />
        <Route exact path="/studentInfo" component={StudentInfo} />
        <Route exact path="/mapPage" component={MapPage} />
        <Route exact path="/requestDetail" component={ChangeRequestDetail} />
        <Route exact path="/routeMap" component={RouteMap} />
        <Route exact path="/requestMap" component={RequestMap} />
        <Route exact path="/offerNewStop" component={OfferNewStop} />

        <Route exact path="/roleManagement" component={RoleManagementScreen} />

        <Route exact path="/schoolStaffHome" component={SchoolStaffHome} />
        <Route exact path="/schoolInfoo" component={SchoolInfoo} />
        <Route exact path="/studentListt" component={StudentListt} />
        <Route exact path="/serviceListt" component={ServiceListt} />
        <Route exact path="/serviceInfoo" component={ServiceInfoo} />
        <Route exact path="/studentInfoo" component={StudentInfoo} />
        <Route exact path="/changeRequestss" component={ChangeRequestss} />
        <Route exact path="/requestDetaill" component={ChangeRequestDetaill} />
        <Route exact path="/mapPagee" component={MapPagee} />
        <Route exact path="/routeMapp" component={RouteMapp} />

        {distributeRoles()}
      </Switch>
    </NativeRouter>
  );
};

export default App;
