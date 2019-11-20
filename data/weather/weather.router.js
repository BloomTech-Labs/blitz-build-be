require("dotenv").config();
const router = require("express").Router();
const axios = require("axios");
const zipcodes = require("zipcodes");
var http = require("http");
var proxy = require("http-proxy");
var url = require("url");

router.post("/", (req, res) => {
  const api_key = process.env.WEATHER_API_KEY;
  const latitude = req.body.latitude;
  const longitude = req.body.longitude;
  axios
    .get(`https://api.darksky.net/forecast/${api_key}/${latitude},${longitude}`)
    .then(response => {
      res.status(200).json(response.data);
    })
    .catch(err => {
      console.log(err);
    });
});

router.get("/:zipcode", (req, res) => {
  const api_key = process.env.WEATHER_API_KEY;
  // const body = req.body;
  const zipcode = req.params.zipcode;
  const zipCodes = zipcodes.lookup(req.params.zipcode);
  let latitude = zipCodes.latitude;
  let longitude = zipCodes.longitude;

  proxyServer = proxy.createProxyServer({ target: "http://127.0.0.1:9000" });

  proxyServer.listen(8000);

  server = http.createServer(function(req, res) {
    console.log(req.url);

    proxyServer.web(req, res, { target: req.url });

    proxyServer.on("error", function(e) {
      console.log("Error in proxy call");
    });
  });

  axios
    .get(
      `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${api_key}/${latitude},${longitude}`
    )
    .then(response => {
      res.status(200).json(response.data);
    })
    .catch(err => {
      console.log(err);
    });

  // const testURL = `https://api.darksky.net/forecast/${api_key}/${latitude},${longitude}`;
  // const myInit = {
  //   method: "HEAD",
  //   mode: "no-cors"
  // };

  // const myRequest = new Request(testURL, myInit);

  // fetch(myRequest)
  //   .then(function(response) {
  //     return response;
  //   })
  //   .then(function(response) {
  //     console.log(response);
  //   })
  //   .catch(function(e) {
  //     console.log(e);
  //   });
});
// router.get("/weather/:zipcode", (req, res) => {
//   const api_key = process.env.WEATHER_API_KEY;
//   const body = req.body;
//   const zipcode = req.params.zipcode;
//   const zipCodes = zipcodes.lookup(req.params.zipcode);
//   let latitude = zipCodes.latitude;
//   let longitude = zipCodes.longitude;

//   axios
//     .get(`https://api.darksky.net/forecast/${api_key}/${latitude},${longitude}`)
//     .then(response => {
//       res.status(200).json(response.data);
//     })
//     .catch(err => {
//       console.log(err);
//     });
// });

module.exports = router;
