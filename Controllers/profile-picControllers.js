export const postPic = (req, res) => {
  try {
    if (!req.file || Object.keys(req.file).length === 0) {
      console.log('No File Found');
      return res.status(400).send('No file uploaded.');
    }

    console.log('File details:', req.file.filename);
    res.send(`<div><h2>Here's the picture:</h2><img src='/static/${req.file.filename}'/></div>`)
  } catch (error) {
    console.error('Error handling file upload:', error);
    return res.sendStatus(500);
  }
};

export const fileFilters= (req, file, cb) => {
    // Define allowed file types
    const allowedFileTypes = ['image/jpeg', 'image/png', 'image/gif'];
  
    // Check if the file type is allowed
    if (allowedFileTypes.includes(file.mimetype)) {
      // Accept the file
      cb(null, true);
    } else {
      // Reject the file
      cb(null, false);
      // Optionally, you can pass an error message
      cb(new Error('Invalid file type. Only JPEG, PNG, and GIF are allowed.'));
    }
  }
