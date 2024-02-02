import express from 'express';
import { postCatPic, fileFilters } from '../Controllers/catPicControllers.js';
import multer from 'multer';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const destinationPath = path.join(__dirname, '..', 'Cats'); 
    cb(null, destinationPath);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
})

const upload = multer({ storage: storage, fileFilter: fileFilters })

const uploadCatPicsRouter = express.Router();


uploadCatPicsRouter.post('/', upload.array('cat_pics', 4), postCatPic)

export default uploadCatPicsRouter;
