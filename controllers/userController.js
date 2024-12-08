
import userModel from '../models/userModel.js';

// userSignUp controller
 const userSignUp = async (req, res) => {
  const {password, email } = req.body;

  try {
    // Validate input
    if ( !password || !email || password==="" || email==="") {
      return res.status(400).json({ message: "All fields are required" });
    }
    if (password.length < 3 ) {
      return res.status(400).json({ message: "Password must be at least 6 characters long" });
    }

    // Create new user
    const newUser = new userModel({
      email,
      password
    });
    await newUser.save();
    res.status(200).json({ message: "you save your data"});

  
  } catch (err) {
    // Handle errors
    //console.error(err);
    res.status(500).json({ message: err.message });
  }
};

export default userSignUp;
