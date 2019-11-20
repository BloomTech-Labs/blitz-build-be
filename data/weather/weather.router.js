// require("dotenv").config();
// const router = require("express").Router();
// const axios = require("axios");
// const zipcodes = require("zipcodes");

// router.post("/", (req, res) => {
//   const api_key = process.env.WEATHER_API_KEY;
//   const latitude = req.body.latitude;
//   const longitude = req.body.longitude;
//   axios
//     .get(`https://api.darksky.net/forecast/${api_key}/${latitude},${longitude}`)
//     .then(response => {
//       res.status(200).json(response.data);
//     })
//     .catch(err => {
//       console.log(err);
//     });
// });

// router.get("/:zipcode", (req, res) => {
//   const api_key = process.env.WEATHER_API_KEY;
//   const zipCodes = zipcodes.lookup(req.params.zipcode);
//   let latitude = zipCodes.latitude;
//   let longitude = zipCodes.longitude;

//   axios
//     .get(
//       `https://blitz-build.herokuapp.com/https://api.darksky.net/forecast/${api_key}/${latitude},${longitude}`
//     )
//     .then(response => {
//       res.status(200).json(response.data);
//     })
//     .catch(err => {
//       console.log(err);
//     });
// });

// module.exports = router;
