import fetch from "node-fetch";

const url = "https://coinmarketcap.com/new/";

export const getRecentListed = async() => {
  const response = await  fetch(url);
  return response.text();
};

