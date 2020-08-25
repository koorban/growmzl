import User from './../models/user.models';
import jwt, { sign } from 'jsonwebtoken';
import config from './../config/config';
import expressJwt from 'express-jwt';

const signIn = async (req, res) => {
    try {
        let user = await User.findOne({
          "email" : req.body.email
        })
        if(!user) return res.status(401).json({ error: "User doesn't exist"})
        
        user.comparePassword(req.body.password, function(err, isMatch) {
            
            if(isMatch === true) {
                
                const token = jwt.sign({
                    _id: user._id
                }, config.jwtSecret)
                
                res.cookie('t', token, {
                    expire: new Date() + 9999
                })
                return res.json({
                    token,
                    user: {
                        _id: user._id,
                        first_name: user.first_name,
                        last_name: user.last_name,
                        email: user.email
                    }
                });
            } else {
                return res.status(400).send({
                    error: "An error occured while logging in"
                });
            }
        });
    } catch (err) {
        return res.status(401).json({
            error: "Unable to sign in"
        });
    };
};

const signOut = async (req, res) => {
    res.clearCookie('t')
    return res.status(200).json({
        message: "Signout Successful"
    })
};

const jwtRequired = expressJwt({
    secret: config.jwtSecret,
    requestProperty: 'auth',
    algorithms: ['HS256'] 
});

const isAuthorized = (req, res, next) => {
    console.log(req.profile._id)
    console.log(req.auth._id)
    console.log(req.profile)
    console.log(req.auth)
    const authorized = req.auth && req.auth._id
    if(authorized) {
        next()
    } else {
        return res.status(400).json({
            error: "User is not authorized"
        })
    } 
};

export default { signIn, jwtRequired, isAuthorized, signOut }