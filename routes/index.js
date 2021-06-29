const express = require("express");
const csrf = require("csurf");
const Category = require("../models/category");
const Course = require("../models/course");
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
   const category=await Category.find();
   console.log(category);
   let course=[];
   course=await Course.find().populate('category');
   
   console.log(course);
   res.render("shop/main", { 
    course,
    category
    });
  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
});
router.get("/course-view", async (req, res) => {
  try {
   console.log(req.session);
   
   res.render("shop/course", { pageName: "Home"});
  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
});

router.get("/course/:id", async (req, res) => {
  try {
   console.log(req.session)
   const id=req.params.id;
   const course=await Course.find({_id:id}).populate('category').populate('related_courses');
   console.log(course)
   res.render("shop/product", { 
    course:course[0]
  });
  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
});


module.exports = router;
