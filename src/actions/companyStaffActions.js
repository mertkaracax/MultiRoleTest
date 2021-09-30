import api from "../api";
import { logError } from "../api/apiHelper";

export const getDrivers = async () => {
  api.getDrivers().then((output) => {
    console.log(output);
  });
};

export const getHostessses = async () => {
  api.getHostesses().then((output) => {
    console.log(output);
  });
};

export const getSchools = async () => {
  api.getSchools1().then((output) => {
    console.log(`ARRAY: -${JSON.stringify(output)}`);
    const school = output[0];
    console.log(`Actions: ${JSON.stringify(school)}`);
    return school;
  });
};

export const getBuses = async () => {
  api.getBuses().then((output) => {
    console.log(`Actions: ${output}`);
  });
};

export const getParent = async () => {
  api.getParent().then((response) => {
    console.log(response);
  });
};
