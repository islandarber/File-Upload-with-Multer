import express from 'express';
import uploadProfilePicRouter from './Routes/upload-profile-pic.js';
import uploadCatPicsRouter from './Routes/uploadCatPics.js';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app= express();
const port = 8000;

app.use('/static', express.static(path.join(__dirname, 'Pic')));
app.use('/static', express.static(path.join(__dirname, 'Cats')));
app.use('/upload-profile-pic', uploadProfilePicRouter);
app.use('/upload-cat-pics', uploadCatPicsRouter);

app.listen(port, (()=>{
  console.log('Listening to port', port);
}))