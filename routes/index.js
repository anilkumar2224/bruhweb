const express = require("express");
const csrf = require("csurf");
const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);
const Category = require("../models/category");
const Review= require("../models/reviews");

const middleware = require("../middleware");
const e = require("express");
const router = express.Router();

const csrfProtection = csrf();



router.use(csrfProtection);

// GET: home page
router.get("/", async (req, res) => {
  try {
   console.log(req.session)
   res.render("shop/main", { pageName: "Home"});
  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
});
router.get("/course-view", async (req, res) => {
  try {
   console.log(req.session)
   res.render("shop/course", { pageName: "Home"});
  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
});

router.get("/course", async (req, res) => {
  try {
   console.log(req.session)
   res.render("shop/product", { pageName: "Home"});
  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
});


module.exports = router;
