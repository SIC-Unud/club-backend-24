const connection = require('../helper/db');

function getBook(req, res) {
  connection.query('SELECT * FROM books', function (err, results, fields) {
    if (err) {
      res.status(500).json({ message: "Ooopss, terjadi kesalahan pada server..." });
    } else {
      fields.forEach((field) => {
        console.log(field.name);
      })
      res.status(200).json({ message: "Query berhasil", result: results });
    }
  });
}

function postBook(req, res) {
  console.log(req.body);
}

function putBook(req, res) {
  const body = req.body.title;
  res.json({ body: `${body} is put` });
}

function deleteBook(req, res) {
  const body = req.body.title;
  res.json({ body: `${body} is deleted` });
}

module.exports = { getBook, postBook, putBook, deleteBook }