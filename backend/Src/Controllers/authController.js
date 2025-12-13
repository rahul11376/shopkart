import User from '../Modals/User.js';
import { generateToken } from '../Utility/jwt.js';
//  Note :   Every successful login and signup creates a fresh token.

export const Signup = async (req, res) => {
// req =={  "fullName": "John Doe",  "email": "you@shopkart.com",  "password": "password123" }
// User  collection name in db

    try {
           const { fullName, email, password } =req.body;

           const Userexist =await User.findOne({ email });

           if (Userexist) {
                return res.status(400).json({ message: "User already exists" });
           }
              const newUser =   await User.create({   fullName,   email,   password   });
              const token = generateToken({ id: newUser._id, email: newUser.email });

              res.status(201).json({ newUser, token });
        
        }
     catch (err) {
          res.status(500).json({ message: err.message });   
        }
};


export const Login = async (req, res) => {
    try {
         const { email, password } = req.body;

         const userexist = await User.findOne({ email});
            if (!userexist) {
                return res.status(404).json({ message: "User not found" });
            }
            if (userexist.password !== password) {
                return res.status(401).json({ message: "Invalid credentials" });
            }

            const token = generateToken({ id: userexist._id, email: userexist.email });
            res.status(200).json({ userexist, token,message:" welcome Login successfully"});

    } catch (err) {
         res.status(500).json({ message: err.message });  
    }
};