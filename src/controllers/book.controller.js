const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function getBook(req, res) {
  const allBooks = await prisma.book.findMany({
    select: {
      title: true,
      pages: true,
      date_released: true,
    }
  });

  res.status(200).json({ message: "Success", data: allBooks });
}

async function postBook(req, res) {
  const body = req.body;
  const sendBook = await prisma.book.create({
    data: {
      title: body.title,
      pages: body.pages,
      date_released: body.date_released,
    }
  });

  res.status(201).json({ message: "Success create", data: sendBook });
}

async function putBook(req, res) {
  const body = req.body;
  const param_id = req.params.id;

  const editBook = await prisma.book.update({
    where: {
      id: parseInt(param_id)
    },
    data: {
      title: body.title,
      pages: body.pages,
      date_released: body.date_released,
    }
  })

  res.status(200).json({ message: "Success edit", data: editBook });
}

async function deleteBook(req, res) {
  const param_id = req.params.id;

  const deleteBook = await prisma.book.delete({
    where: {
      id: parseInt(param_id)
    }
  })

  res.status(200).json({ message: "Success delete", data: deleteBook });
}

module.exports = { getBook, postBook, putBook, deleteBook }