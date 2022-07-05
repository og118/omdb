const mongoose = require("mongoose");
const validator = require("validator");
const uniqueValidator = require('mongoose-unique-validator');
const bcrypt = require('bcryptjs');

const config = require("../utils/config")

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter your good name"],
    },
    email: {
      type: String,
      required: [true, "Please provide your email"],
      unique: [true, "The email belongs to another user"],
      lowercase: true,
      validate: [validator.isEmail, "Please provide a valid email"],
    },
    password: {
      type: String,
      required: [true, "Please enter a Password"],
      minlength: [8, "A password must be atleast 8 characters long"],
      select: false,
    },
    dob: {
      type: Date,
      required: [true, "Please enter your date of birth"],
    },
    profile_pic: {
      type: String,
    },
    created_at: {
      type: Date,
      default: Date.now(),
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

userSchema.plugin(uniqueValidator, {message: '{PATH} already exists!' });

userSchema.pre('save', async function(next) {
    if(!this.isModified('password')) return next();

    this.password = bcrypt.genSalt(parseInt(config.BCRYPT_SALT_ROUNDS), function(err, salt) {
        bcrypt.hash(this.password, salt, function(err, hash) {
            // Store hash in your password DB.
        });
    });
    next();
})

userSchema.methods.correctPassword = async function(candidatePassword, userPassword) {
    return await bcrypt.compare(candidatePassword, userPassword);
}

const User = mongoose.model("User", userSchema);
module.exports = User;
