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

  // https://cors-anywhere.herokuapp.com

  axios
    .get(
      (function() {
        var cors_api_host = "cors-anywhere.herokuapp.com";
        var cors_api_url =
          "https://" +
          cors_api_host +
          `/https://api.darksky.net/forecast/${api_key}/${latitude},${longitude}`;
        var slice = [].slice;
        var origin = window.location.protocol + "//" + window.location.host;
        var open = XMLHttpRequest.prototype.open;
        XMLHttpRequest.prototype.open = function() {
          var args = slice.call(arguments);
          var targetOrigin = /^https?:\/\/([^\/]+)/i.exec(args[1]);
          if (
            targetOrigin &&
            targetOrigin[0].toLowerCase() !== origin &&
            targetOrigin[1] !== cors_api_host
          ) {
            args[1] = cors_api_url + args[1];
          }
          return open.apply(this, args);
        };
      })()
    )

    // axios
    //   .get(
    //     `https://blitz-build.herokuapp.com/https://api.darksky.net/forecast/${api_key}/${latitude},${longitude}`
    //   )
    .then(response => {
      res.status(200).json(response.data);
    })
    .catch(err => {
      console.log(err);
    });
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
