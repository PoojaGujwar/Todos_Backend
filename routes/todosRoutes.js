const express = require("express")
const route = express.Router()

const {getTodos, createTodos, deleteTodo} = require("../controller/todoController");

route.get("/", getTodos);
route.post("/",createTodos);
route.delete("/:id",deleteTodo);

module.exports = route;