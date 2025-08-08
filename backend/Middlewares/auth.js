import { jwt } from 'jsonwebtoken';

const isAuthenticate = async (req, res, next) => {
    try {
        const token = req.body.token;
        if(!token) {
            return res.status(400).json({
                message: "Please signin"
            })
        }
        const decode = await jwt.verify(token, process.env.JWT_SECRET);
        if(!decode) {
            return res.status(402).json({
                message: "Invalid token"
            })
        }
        req.id = decode.id;
        next();
    } catch (error) {
        console.log(error);
    }
}

export default isAuthenticate;