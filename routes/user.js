const express = require("express");
const router = express.Router();
const csrf = require("csurf");
var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;

const middleware = require("../middleware");
const {
  userSignUpValidationRules,
  userSignInValidationRules,
  validateSignup,
  validateSignin,
} = require("../config/validator");
const csrfProtection = csrf();
router.use(csrfProtection);

// GET: display the signup form with csrf token
router.get("/signup", middleware.isNotLoggedIn, (req, res) => {
  var errorMsg = req.flash("error")[0];
  res.render("user/signuppage", {
    csrfToken: req.csrfToken(),
    errorMsg,
    pageName: "Sign Up",
  });
});
// POST: handle the signup logic
router.post(
  "/signup",
  [
    middleware.isNotLoggedIn,
    userSignUpValidationRules(),
    validateSignup,
    passport.authenticate("local.signup", {
      successRedirect: "/",
      failureRedirect: "/user/signuppage",
      failureFlash: true,
    }),
  ],
  async (req, res) => {
    try {
      //if there is cart session, save it to the user's cart in db
     
      // redirect to the previous URL
      if (req.session.oldUrl) {
        var oldUrl = req.session.oldUrl;
        req.session.oldUrl = null;
        res.redirect(oldUrl);
      } else {
        // res.redirect("/user/profile");
        res.redirect("/");
      }
    } catch (err) {
      console.log(err);
      req.flash("error", err.message);
      return res.redirect("/");
    }
  }
);

// GET: display the signin form with csrf token
router.get("/signin", middleware.isNotLoggedIn, async (req, res) => {
  var errorMsg = req.flash("error")[0];
  res.render("user/loginpage", {
    csrfToken: req.csrfToken(),
    errorMsg,
    pageName: "Sign In",
  });
});

// POST: handle the signin logic
router.post(
  "/signin",
  [
    middleware.isNotLoggedIn,
    userSignInValidationRules(),
    validateSignin,
    passport.authenticate("local.signin", {
      successRedirect: "/",
      failureRedirect: "/user/loginpage",
      failureFlash: true,
    }),
  ],
  async (req, res) => {
    try {
      // cart logic when the user logs in
     
      // redirect to old URL before signing in
      if (req.session.oldUrl) {
        var oldUrl = req.session.oldUrl;
        req.session.oldUrl = null;
     
        res.redirect(oldUrl);
      } else {
        // res.redirect("/user/profile");
        res.redirect("/");
      }
    } catch (err) {
      console.log(err);
      req.flash("error", err.message);
      return res.redirect("/");
    }
  }
);

// GET: display user's profile
// router.get("/profile", middleware.isLoggedIn, async (req, res) => {
//   const successMsg = req.flash("success")[0];
//   const errorMsg = req.flash("error")[0];
//   try {
//     // find all orders of this user
//     allOrders = await Order.find({ user: req.user });
//     res.render("user/profile", {
//       orders: allOrders,
//       errorMsg,
//       successMsg,
//       pageName: "User Profile",
//     });
//   } catch (err) {
//     console.log(err);
//     return res.redirect("/");
//   }
// });

// GET: logout
router.get("/logout", middleware.isLoggedIn, (req, res) => {
  req.logout();
  req.session.cart = null;
  res.redirect("/");
});
module.exports = router;
