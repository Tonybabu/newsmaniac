const {NewsUser}=require('../db/auth')
const bcrypt = require('bcrypt');

const signup= async (req,res)=>{
    try {
        const { username, email, password } = req.body;
        //console.log(username,email);
        // Checking if the email already exists
        const existingUser = await NewsUser.findOne({ email });
        if (existingUser) {
          return res.status(201).json({message:'User already exists'});
        }
    
        //if not then Create a new user
        const newUser = new NewsUser({ username, email, password });
        await newUser.save();
    
        res.status(201).json({message:'Register successful'});
      } catch (error) {
        res.status(500).send(error.message);
      }
}

const login=async(req,res)=>{
    try {
        const { email, password } = req.body;
        const user = await NewsUser.findOne( { email });
        if (!user) {
          return res.status(400).send('User not found');
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
          return res.status(200).json({message:'Invalid credentials'});
        }
        res.status(200).json({message:'Login successful'});
      } catch (error) {
        res.status(500).send(error.message);
      }
}

module.exports={signup,login}