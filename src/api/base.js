import axios from "axios";
import { useState } from "react";
import { REACT_CLIENT_ID } from "@env";

import { logError } from "./apiHelper";

// export const [user, setUser] = useState();

class BaseController {
  constructor({ baseURL, timeout }) {
    this.api = axios.create({
      baseURL,
      timeout,
      headers: { "Content-Type": "application/json" }
    });

    this.api.interceptors.request.use((prevConfig) => {
      const { ...config } = prevConfig;
      config.headers.Authorization = this.token;
      return config;
    });

    // this.api.interceptors.request.use((request) => {
    //   // for testing purposes
    //   console.log("Starting Request", JSON.stringify(request, null, 2));
    //   return request;
    // });

    // this.api.interceptors.response.use((response) => {
    //   // for testing purposes
    //   console.log("Response:", JSON.stringify(response, null, 2));
    //   return response;
    // });
  }

  setToken(token, type = "Bearer") {
    this.token = `${type} ${token}`;
  }

  async login(username, password) {
    try {
      console.log("aaaaa", this.api.defaults.baseURL);
      const opt = { headers: { "Content-Type": "application/x-www-form-urlencoded" } };
      console.log("43");
      /* const urlencoded = new URLSearchParams();
      urlencoded.append("username", username);
      urlencoded.append("password", password);
      urlencoded.append("grant_type", "password");
      urlencoded.append("client_id", REACT_CLIENT_ID); */
      const json = {
        client_id: REACT_CLIENT_ID,
        grant_type: "password",
        password,
        username
      };
      const data = new URLSearchParams(json).toString();
      const result = await this.api.post("/token", data, opt);
      this.setToken(result.data.access_token);
      console.log(result.data);
      console.log("token----->", result.data.access_token);

      return result.data;
    } catch (error) {
      logError(error);
      return null;
    }
  }
}

export default BaseController;
