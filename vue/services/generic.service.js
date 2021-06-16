import axios from "axios";

const API_URL = 'http://localhost:5005'

const request = async ({url, method, data}) => {
  const resonse = await axios[method](`${API_URL}/${url}`, data);
  return resonse;
}

export {request}
