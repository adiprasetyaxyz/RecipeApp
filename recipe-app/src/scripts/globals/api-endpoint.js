import CONFIG from "./config";

const API_ENDPOINT = {
  SEARCH: `${CONFIG.URL}/recipes/complexSearch/`,
  INFORMATION: `${CONFIG.URL}/recipes/{id}/information`,
};

export default API_ENDPOINT;
