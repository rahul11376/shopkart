import jsonwebtoken from 'jsonwebtoken';
const SECRET_KEY = 'your_secret_key';

// authentication middleware
const logger = (req, res, next) => {
       const token = req.headers['authorization'];
    if (!token){
      console.log(`${req.method} ${req.path} - No token provided`);
    }
    else{
        try{
            const decoded = jsonwebtoken.verify(token, SECRET_KEY);
            req.user = decoded; // attach user info to request object
             next();
        }
        catch(err){
            console.log(`${req.method} ${req.path} - Invalid token`);
        }
    }

   
};


export default logger;