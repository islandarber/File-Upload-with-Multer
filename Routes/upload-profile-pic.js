import express from 'express';
import { postPic, fileFilters } from '../Controllers/profile-picControllers.js';
import multer from 'multer';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const destinationPath = path.join(__dirname, '..', 'Pic'); 
    cb(null, destinationPath);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
})

const upload = multer({ storage: storage, fileFilter: fileFilters })

const uploadProfilePicRouter = express.Router();


uploadProfilePicRouter.post('/', upload.single('profile_pic'), postPic)

export default uploadProfilePicRouter;
