const axios = require("axios");
const login = "/auth/login/seller";
const AuthService = {};

AuthService.login = async () => {
  const fullUrl = "https://dinerpro-backend-cdq6.onrender.com" + login;
  const headers = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const stringifyBody = {
    email: "test@gmail.com",
    password: "qwertyuiop",
  };

  try {
    const res = await axios.post(fullUrl, stringifyBody, headers);
    const responseData = res.data;
    const responseFormat = {};

    if (responseData.msg) {
      console.log("EE");
      responseFormat.error = responseData.msg;
      return responseFormat;
    }
    const newData = responseData.accessToken;
    // const [theData] = newData;
    responseFormat.success = newData;

    return responseFormat;
  } catch (error) {
    console.log("Er", error);
    const errorFormat = { error: {} };
    const errorResponse = error.response.data;
    errorResponse.status = error.response.status;
    errorFormat.error = errorResponse;
    console.log("E res", errorResponse);
    return errorFormat;
  }
};

export default AuthService;
