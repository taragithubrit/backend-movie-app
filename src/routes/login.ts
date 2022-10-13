import { generateAccessToken } from '../utils/jwt'

const users = [{
    name: 'alex',
    email: 'alex.alex@gmail.com',
    password: 'alex12345'
},
{
    name: 'dennis',
    email: 'dennis@gmail.com',
    password: 'dennis12345'
},
{
    name: 'peter',
    email: 'peter@outlook.com',
    password: 'peter12345'
}]

export const loginController = (req: any, res: any) => {
  const { email, password } = req.body;
  if (email && password) {
    const user = users.find((u) => u.email === email && u.password === password);
    if (user) {
      res.status(200).json({accessToken: generateAccessToken(user)});
    }
  }

  res.status(401).json({message:"unauthorized"});
};