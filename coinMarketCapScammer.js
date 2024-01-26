import axios from "axios";

const url = "https://coinmarketcap.com/new/";

export const getRecentListed = async() => {
  return await axios.get(url)
};

