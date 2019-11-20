require("dotenv").config();
const router = require("express").Router();
const axios = require("axios");
const zipcodes = require("zipcodes");

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

  console.log("im here");
  axios
    .get(
      `https://cors-anywhere.blitz-build.herokuapp.com/https://api.darksky.net/forecast/${api_key}/${latitude},${longitude}`
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
