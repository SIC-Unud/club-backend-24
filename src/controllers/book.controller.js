function getBook(req, res) {
  res.json({ book: ['manga', 'novel', 'biography'] });
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