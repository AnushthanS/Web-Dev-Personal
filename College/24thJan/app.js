const express = require('express');
const morgan = require('morgan');
const path = require('path');
const rfs = require('rotating-file-stream');
const helmet = require('helmet');
const multer = require('multer');


const app = express();
const fileStorageEngine = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './images');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage: fileStorageEngine });
//single file route handler
app.post('/single', upload.array('image', 3), (req, res) => {
    console.log(req.file);
    res.send('File(s) Uploaded Successfully');
});


app.get('/', (req, res) => {
    res.sendFile('index.html' , { root : __dirname});
});

// app.use(morgan('tiny'));
// app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

morgan.token('token1', ":remote-addr :remote-user :method :url HTTP/:http-version :status :res[content-length] - :response-time ms");

const accessLogStream = rfs.createStream(`${Date.now()}-access.log`, {
    interval: '1h',
    path: path.join(__dirname, 'log')
});
app.use(morgan('token1', {stream: accessLogStream}));
app.use(helmet());


app.use(express.urlencoded({ extended: false }));


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});