import { REACT_API_URL } from "@env";
import BaseController from "./base";
import CompanyStaffControllerMixin from "./companystaff";
import HostessControllerMixin from "./hostess";
import SecurityControllerMixin from "./security";
import UserControllerMixin from "./user";
import SchoolStaffControllerMixin from "./schoolStaff";

const mix = (mixins, baseClass) => mixins.reduce((newClass, mixin) => mixin(newClass), baseClass);

const API = mix(
  [
    UserControllerMixin,
    SecurityControllerMixin,
    HostessControllerMixin,
    SchoolStaffControllerMixin,
    CompanyStaffControllerMixin
  ],
  BaseController
);

const api = new API({
  baseURL: "https://kidsbus-dev.eu-central-1.elasticbeanstalk.com/api",
  timeout: 100 // 20000
});

export default api;
