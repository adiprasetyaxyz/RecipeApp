import CONFIG from "./config";

const API_ENDPOINT = {
  SEARCH: `${CONFIG.URL}/recipes/complexSearch/`,
  RANDOM: `${CONFIG.URL}/recipes/random/`,
  INFORMATION: `${CONFIG.URL}/recipes/{id}/information`,
};

export default API_ENDPOINT;
