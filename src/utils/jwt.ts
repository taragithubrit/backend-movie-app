import jwt from 'jsonwebtoken';
import { User } from '../model/user';


const secret = 'my-secret-jwt';

export function generateAccessToken(param: User){
    return jwt.sign(param, secret, { expiresIn: '1800s'});
}

export const authenticateJWT = (req: any, res: any, next: any) => {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1];

        jwt.verify(token, secret, (err: any, user: User) => {
            if (err) {
                return res.sendStatus(403);
            }

            req.user = user;
            next();
        });
    } else {
        res.sendStatus(401);
    }
};


