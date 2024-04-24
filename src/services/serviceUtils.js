"use client";
const axios = require("axios");
require("dotenv").config();

let token;

if (typeof window !== "undefined") {
  token = window.localStorage.getItem("auth_token");
  console.log("we are running on the client");
} else {
  console.log("we are running on the server");
}

const apiUrls = {
  baseUrl: "https://dinerpro-backend.onrender.com",
  inventoryUrl: "/products",
  procurementUrl: "/kitchen/procurement",
};

const proccessReq = async (targetUrl, method, body) => {
  const fullUrl = apiUrls.baseUrl + targetUrl;
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
    console.log("E", error);
    const errorFormat = { error: {} };
    const errorResponse = error.response.data;
    errorResponse.status = error.response.status;
    errorFormat.error = errorResponse;
    return errorFormat;
  }
};

const utils = {
  apiUrls,
  proccessReq,
};

export default utils;
