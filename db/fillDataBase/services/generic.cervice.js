import axios from "axios";

const API_URL = 'http://localhost:5005'

const request = async ({url, method, data}) => {
  await axios[method](`${API_URL}/${url}`, data);
}

export {request}
