const userSchema = require("../models/userSchema");
const bcrypt = require("bcrypt");

//Create user api
let createUser = async (req, res) => {
  const userData = new userSchema(req.body);
  const salt = await bcrypt.genSalt(10);
  try {
    const isUserExist = await userSchema.findOne({
      email: req.body.email,
    });
    if (isUserExist) {
      res.status(401).json({
        success: false,
        message: "User is already registered with this email",
      });
    } else {
      userData.password = await bcrypt.hash(req.body.password, salt);
      let user = await userData.save();
      res.status(201).json({
        success: true,
        message: "User added sucessfully",
        user: user,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: `Error occur ${error.message}`,
    });
  }
};

//User Login api
let userLogin = async (req, res) => {
  try {
    let userData = await userSchema.findOne({
      userEmail: req.body.userEmail,
    });
    if (userData) {
      const hashPassword = await bcrypt.compare(
        req.body.password,
        userData.password
      );
      if (userData && hashPassword) {
        // const token = jwt.sign({ userData }, process.env.SECRET_KEY, {
        //   expiresIn: "2m",
        // });
        res.status(200).json({
          success: true,
          message: "Login successfully",
        });
      } else {
        res.status(401).json({
          success: false,
          message: "Invalid user email or password",
        });
      }
    } else {
      res.status(403).json({
        success: false,
        message: "User is not register with this email",
      });
    }
  } catch (error) {
    res.status(500).send({
      success: false,
      error: `Error occur ${error.message}`,
    });
  }
};

module.exports = {
  createUser,
  userLogin,
};
