export const postCatPic = (req, res) => {
  try {
    if (!req.files || Object.keys(req.files).length === 0) {
      console.log('No File Found');
      return res.status(400).send('No file uploaded.');
    }

    console.log('File details:', req.files);
    const imageHTML = req.files.map(file => `<img src='/static/${file.filename}'/>`).join('');
    res.send(`<div><h2>Here are the pictures:</h2>${imageHTML}</div>`);
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
