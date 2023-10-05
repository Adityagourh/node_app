//const { number } = require("joi");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },

  isActive: {
    type: String,
    default: true,
  },
});
userSchema.set("timestamps", true);

module.exports = mongoose.model("Users", userSchema);
