const axios = require("axios");
const express = require("express");
const router = express.Router();

const movies = require("../data/movies");

// const apiKey = "1fb720b97cc13e580c2c35e1138f90f8";
// const apiBaseUrl = "https://api.themoviedb.org/3";
const apiKey = "123456789";
const apiBaseUrl = "localhost:3030";
const nowPlayingUrl = `${apiBaseUrl}/movie/now_playing?api_key=${apiKey}`;
const imageBaseUrl = "http://image.tmdb.org/t/p/w300";

// GET home page.
router.get("/", (req, res, next) => {
  res.render("index", { title: "Express" });
});

router.get("/most_popular", (req, res, next) => {
  // get the page variable from the query-string
  let page = req.query.page;

  if (page === undefined) {
    page = 0;
  }

  let results = movies.filter((movie) => {
    return movie.most_popular;
  });

  const indexToStart = (page - 1) * 20;
  results = results.slice(indexToStart, indexToStart + 19);
  res.json({
    page,
    results,
  });
});

module.exports = router;
