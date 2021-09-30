export const logError = (error) => {
  if (error.response) {
    // Request made and server responded
    console.log("Data: ", error.response.data);
    console.log("Status: ", error.response.status);
    console.log(error.response.headers);
  } else if (error.request) {
    // The request was made but no response was received
    console.log("Request: ", error.request);
  } else {
    // Something happened in setting up the request that triggered an Error
    console.log("Error: ", error.message);
  }
};
