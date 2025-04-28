const multer = require('multer');

const data = new Date();

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, './public/assets/uploads');
  },
  filename(req, file, cb) {
    file.originalname = `${data.getHours()}${data.getMinutes()}${data.getSeconds()}${file.originalname}`;
    cb(null, file.originalname);
  },
});

module.exports = storage;
