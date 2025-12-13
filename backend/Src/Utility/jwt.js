import jwt from 'jsonwebtoken';

const SECRET_KEY = 'your_secret_key'; 

// mandatory: use env variable in production
// time is optional here
//  payload { id: '12345', email: 'you@shopkart.com' }

export const generateToken = (payload) => {
  return jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' });
};
