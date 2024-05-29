"use client";
const axios = require("axios");
require("dotenv").config();
import AuthService from "./AuthService";

let token;

if (typeof window !== "undefined") {
  token = window.localStorage.getItem("auth_token");
  console.log("we are running on the client");
} else {
  console.log("we are running on the server");
}

const apiUrls = {
  baseUrl: "https://dinerpro-backend-cdq6.onrender.com",
  inventoryUrl: "/products",
  procurementUrl: "/kitchen/procurement",
};

const proccessReq = async (targetUrl, method, body) => {
  const fullUrl = apiUrls.baseUrl + targetUrl;

  if (!token) {
    const login = await AuthService.login();

    if (login.success) {
      const newT = login.success;
      console.log("nEWt", newT);
      window.localStorage.setItem("auth_token", newT);
      token = newT;
    }
    console.log("login", login);
  }
  const headers = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  const handleRequest = {
    getRequest: async () => {
      const resData = await axios.get(fullUrl, headers);
      return resData;
    },
    postRequest: async () => {
      const stringifyBody = body;
      const resData = await axios.post(fullUrl, stringifyBody, headers);
      return resData;
    },
    patchRequest: async () => {
      const stringifyBody = body;
      const resData = await axios.patch(fullUrl, stringifyBody, headers);
      return resData;
    },
  };

  try {
    let res;

    if (method === "GET") {
      res = await handleRequest.getRequest();
    } else if (method === "POST") {
      res = await handleRequest.postRequest();
    } else if (method === "PATCH") {
      res = await handleRequest.patchRequest();
    }

    const responseData = res.data;
    const responseFormat = {};

    if (responseData.msg) {
      responseFormat.error = responseData.msg;
      return responseFormat;
    }
    const newData = responseData.data;
    // const [theData] = newData;
    responseFormat.success = newData;

    return responseFormat;
  } catch (error) {
    console.log("Et", error);
    const errorFormat = { error: {} };
    const errorResponse = error.response.data;
    errorResponse.status = error.response.status;
    errorFormat.error = errorResponse;
    console.log("E response", errorResponse);
    if (errorResponse.message === "jwt expired") {
      console.log("Re login");
      const login = await AuthService.login();

      if (login.success) {
        const newT = login.success;
        console.log("Re suc", newT);
        window.localStorage.setItem("auth_token", newT);
        token = newT;
      }
      console.log("login", login);
    }
    return errorFormat;
  }
};

const utils = {
  apiUrls,
  proccessReq,
};

export default utils;
