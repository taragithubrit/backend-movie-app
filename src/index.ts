import express from "express";
import { loginController } from "./routes/login";
import { searchController } from "./routes/search";
import { authenticateJWT } from "./utils/jwt";
import cors from 'cors';

const app = express();
const port = 8080; // default port to listen
app.use(cors());
app.use(express.json());
// define a route handler for the default home page
app.get( "/", ( req, res ) => {
    res.send( "backend is running!" );
} );

app.post('/api/login', loginController);

app.get('/api/search', authenticateJWT, searchController);

// start the Express server
app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ port }` );
} );