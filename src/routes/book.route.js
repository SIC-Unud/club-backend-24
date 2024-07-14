const { Router } = require("express");
const { getBook, postBook, putBook, deleteBook } = require("../controllers/book.controller");

const bookRouter = Router();

bookRouter.get('/', getBook);

bookRouter.post('/', postBook);

bookRouter.put('/:id', putBook);

bookRouter.delete('/:id', deleteBook)


module.exports = { bookRouter }