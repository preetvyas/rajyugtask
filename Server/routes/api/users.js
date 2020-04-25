const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");

// Load input validation
const validateRegisterInput = require("../../validation/register");

const User = require("../../models/User");

// @route POST api/users/register
// @desc Register user
// @access Public
router.post("/register", (req, res) => {
  // Form validation

  const { errors, isValid } = validateRegisterInput(req.body);

  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ name: req.body.name }).then(user => {
    if (user) {
      return res.status(400).json({ name: "Name already exists" });
    } else {
      const newUser = new User({
        name: req.body.name,
        country: req.body.country,
        country: req.body.city,
        salary:req.body.salary
      });

      // Hash password before saving in database
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
});
router.get("/user/list", (req, res) => {
  User.find({  }).then(user => {
    if (user) {
      return res.status(400).json({ email: "Email already exists" });
    } else {
      res.json(user)
    }
  });
});

module.exports = router;
