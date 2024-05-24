const UserModel = require("../Models/user-model");
const DonateModel = require("../Models/donate-model");
const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");

exports.signup = async (req, res) => {
  console.log(req.body);
  const { email, password, username } = req.body;

  // Check if the user already exists
  let user = await UserModel.findOne({ email });
  if (user) {
    return res.status(400).json({ message: "Email already registered" });
  }

  // Generate random activation code
  const activationCode = uuidv4();

  // Encrypt password
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);

  // Create new user
  user = new UserModel({
    username,
    email,
    password: hashPassword,
    activationCode,
  });

  // Save user to the database
  await user.save();
  res.send("User registered successfully");

  //email sending code
  const transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const activationlink = `http://localhost:${process.env.PORT}/auth/activate/${activationCode}`;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Please verify your address",
    text: `Click the below link to verify your email address for Food Donation application ${activationlink}`,
  };
  transport.sendMail(mailOptions, (err, info) => {
    if (err) {
      return res.status(500).json({
        message: "cannot send link",
      });
    } else {
      return res.status(200).json({
        message:
          "Activation link sent to your email please verify to proceed loginn",
      });
    }
  });
};

//activation code
exports.activate = async (req, res) => {
  const { activationCode } = req.params;
  let user = await UserModel.findOne({ activationCode });
  if (!user) {
    res.status(500).json({
      message: "cannot sent activation link",
    });
  }
  user.isActivated = true;
  user.save();
  res.status(200).json({
    message: "Account activated Successfully",
  });
};

//signin
exports.signin = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  let user = await UserModel.findOne({ email });
  if (!user) {
    return res.status(400).json({ message: "Email not found" });
  }

  const isMatching = await bcrypt.compare(password, user.password);

  if (!isMatching) {
    return res.status(400).json({ message: "Incorrect password" });
  }

  if (!user.isActivated) {
    return res
      .status(400)
      .json({
        message: "Account not yet activated. Please activate first to login",
      });
  }

  return res.status(200).json({
    message: "Login successful",
    user,
  });
};

exports.donate = async (req, res) => {
  console.log(req.body);
  const { place, add, person, date, num } = req.body;

  let donate = new DonateModel({
    place,
    add,
    person,
    date,
    num,
  });

  await donate.save();
  res.send("donate registered successfully");
};

exports.showUsers = async (req, res) => {
  try {
    const users = await DonateModel.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch users" });
  }
};
