require('dotenv').config()
const router = require('express').Router()
const axios = require('axios')
<<<<<<< HEAD
const zipcodes = require('zipcodes')
=======
>>>>>>> master
router.post('/weather', (req, res) => {
    const api_key = process.env.WEATHER_API_KEY;
    const latitude = req.body.latitude;
    const longitude = req.body.longitude;
      axios
        .get(
          `https://api.darksky.net/forecast/${api_key}/${latitude},${longitude}`
        )
        .then(response => {
          res.status(200).json(response.data);
        })
        .catch(err => {
          console.log(err);
        });
 })
<<<<<<< HEAD
 router.get('/weather/:zipcode', (req, res) => {
  const api_key = process.env.WEATHER_API_KEY;
  const body = req.body
  const zipcode = req.params.zipcode
const zipCodes = zipcodes.lookup(req.params.zipcode);
let latitude = zipCodes.latitude;
let longitude = zipCodes.longitude


    axios
      .get(
        `https://api.darksky.net/forecast/${api_key}/${latitude},${longitude}`
      )
      .then(response => {
        res.status(200).json(response.data);
      })
      .catch(err => {
        console.log(err);
      });
})
router.get('/weather/:zipcode', (req, res) => {
  const api_key = process.env.WEATHER_API_KEY;
  const body = req.body
  const zipcode = req.params.zipcode
const zipCodes = zipcodes.lookup(req.params.zipcode);
let latitude = zipCodes.latitude;
let longitude = zipCodes.longitude


    axios
      .get(
        `https://api.darksky.net/forecast/${api_key}/${latitude},${longitude}`
      )
      .then(response => {
        res.status(200).json(response.data);
      })
      .catch(err => {
        console.log(err);
      });
})
=======

>>>>>>> master
 module.exports = router