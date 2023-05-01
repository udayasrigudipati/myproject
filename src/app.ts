import express, {Application, Request, Response} from 'express';
import "dotenv/config"
import path from "path"
import dbInit from './db/init';
import routes from './routes';

const cors = require('cors');
const port = process.env.PORT || 3000;

dbInit()

const app: Application = express();

//enable cors
app.use(cors());

//body parsing middleware
app.use(express.json())
let  uiCodePath = "client-dist"
app.get('/', (req:Request, res:Response) => {
 return res.sendFile(
    path.join(__dirname, '..', uiCodePath, "index.html")
 );
});

//initilaizing routes
app.use('/api/v1', routes)

app.get('*', (req:Request, res:Response) => {
   return res.sendFile(
      path.join(__dirname, '..', uiCodePath, "index.html")
   );
  });
app.listen(port, () => {
 return console.log(`Express is listening at http://localhost:${port}`);
});
