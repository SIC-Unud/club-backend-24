const { Router } = require("express");
const { getBook, postBook, putBook, deleteBook } = require("../controllers/book.controller");

const bookRouter = Router();

bookRouter.get('/', getBook);

bookRouter.post('/', postBook);

bookRouter.put('/', putBook);

bookRouter.delete('/', deleteBook)


module.exports = { bookRouter }