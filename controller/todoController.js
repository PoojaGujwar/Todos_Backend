const Todo = require("../models/todos.model")

exports.getTodos = async (req, res) => {
    try {
        const todos = await Todo.find();
        res.json(todos);
    } catch (error) {
        res.json({ message: "Internal Server error", error })
    }

}

exports.createTodos = async (req, res) => {
    try {
        const todo = new Todo(req.body)
        await todo.save();
        res.json(todo);
    } catch (error) {
        res.json({ message: "Internal Server error", error:error.message })
    }

}
exports.deleteTodo = async (req, res) => {
    try{
    await Todo.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted Successfully" });
    }catch (error) {
        res.json({ message: "Internal Server error", error:error.message })
    }
   
};