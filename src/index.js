const express = require("express");
const { bookRouter } = require("./routes/book.route.js");
const { authRouter } = require("./middleware/auth.js");

const app = express();
const port = 3000;


// middleware untuk mengolah request body yang berupa json
app.use(express.json());

// middleware untuk mengolah request body yang berupa x-www-form-urlencoded (form website)
app.use(express.urlencoded({ extended: true }))

// middleware untuk autentikasi
app.use(authRouter);

app.get('/', function (req, res) {
  res.send('Hello world');
});

app.get('/user', function (req, res, next) {
  res.json({ user: ['budi', 'jono', 'andi'] });
});

app.use('/book', bookRouter);

// satu endpoint bisa dipakai terus-terusan dengan next()
app.get('/next', function (req, res, next) {
  console.log('first log!');
  next();
});

app.get('/next', function (req, res, next) {
  console.log('second log!');
  next();
});

app.get('/next', function (req, res, next) {
  console.log('final log!');
  res.send("Final log sent!");
});

app.listen(port, function () {
  console.log(`App is running on localhost:${port}`);
})