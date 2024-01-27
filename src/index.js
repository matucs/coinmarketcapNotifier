import * as cheerio  from "cheerio";
import {getRecentListed} from "./coinMarketCapScammer.js";
import {sendMesage} from "./telegramNotifier.js";
import express from "express";

const app = express();
const port = process.env.PORT || 3000;

app.listen( port ,()=>{
  console.log('server is running at port number 3000')
});

const chatIds = ["102455115", "98076110"];

  setInterval(() => {
    const result = getRecentListed().then((response) => {
        const $ = cheerio.load(response);
        const recentlyAddedTokens = [];
        let topCoin = $(".kKpPOn")[0].children[0].data;

        if (topCoin === $(".kKpPOn")[0].children[0].data) {
             chatIds.forEach((id) => {
                const message = $(".kKpPOn")[0].children[0].data;
                sendMesage(id, message);
            });
        }
      })
      .catch((error) => {
        console.error(
          "Error fetching data from CoinMarketCap website:",
          error.message
        );
      });

 
    console.log(result);
  }, 20000);
