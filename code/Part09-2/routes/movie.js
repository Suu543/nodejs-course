const express = require("express");
const router = express.Router();

const movieDetails = require("../data/movieDetails");

function requireJSON(req, res, next) {
  if (!req.is("application/json")) {
    res.json({ msg: "Content Type must be application/json" });
  } else {
    next();
  }
}

router.param("movieId", (req, res, next) => {
  // if only certain apikeys are allowed to hit movieId
  // update the db with analytics data
  console.log("Someone hit a route that used the movieId wildcard!");
  next();
});

// GET movie page
// /movie/...

// GET /movie/top_rated
router.get("/top_rated", (req, res, next) => {
  // vote_average 사용
  let page = req.query.page;
  if (!page) page = 1;

  const results = movieDetails.sort((a, b) => {
    return b.vote_average - a.vote_average;
  });

  const indexToStart = (page - 1) * 20;
  res.json(results.slice(indexToStart, indexToStart + 20));
});

// GET /movie/movieId
// This one needs to come last of all /ONETHING
// testcase: 315635
router.get("/:movieId", (req, res, next) => {
  // apiKey를 query에 붙여줘야 하는 데 모든 라우터 핸들러에 붙일 수 없기 때문에,
  // app.js의 middleware로 설정하자.
  const movieId = req.params.movieId;
  const results = movieDetails.find((movie) => {
    console.log(movie.id, "==========", movieId);
    // return movie.id === Number(movieId);
    return movie.id == movieId;
  });

  // find method는 존재하지 않는 경우 undefined를 리턴한다.
  // console.log(results);

  if (!results) {
    res.json({
      msg: "Movid ID is not found...",
      production_companies: [],
    });
  } else {
    res.json(results);
  }
});

// POST /movie/{movie_id}/rating
router.post("/:movieId/rating", requireJSON, (req, res, next) => {
  const movieId = req.params.movieId;
  // console.log(req.get("content-type"));
  const userRating = req.body.value;

  if (userRating < 0.5 || userRating > 10) {
    res.json({ msg: "Rating must be between .5 and 10" });
  } else {
    res.json({
      msg: "Thank you for submitting your rating...",
      status_code: 200,
    });
  }
});

// DELETE /movie/{movie_id}/rating
router.delete("/:movieId/rating", requireJSON, (req, res, next) => {
  res.json({ msg: "Rating Deleted!" });
});

module.exports = router;
