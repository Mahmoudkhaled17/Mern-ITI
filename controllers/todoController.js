const { todos, Todo } = require("../models/todoModel");

// Create Todo
exports.createTodo = (req, res) => {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({ message: "Title is required" });
  }

  const newTodo = new Todo(title);
  todos.push(newTodo);

  res.status(201).json(newTodo);
};

// Get All Todos
exports.getAllTodos = (req, res) => {
  res.json(todos);
};

// Get Todo by ID
exports.getTodoById = (req, res) => {
  const todo = todos.find((t) => t.id === req.params.id);

  if (!todo) {
    return res.status(404).json({ message: "Todo not found" });
  }

  res.json(todo);
};

// Update Todo
exports.updateTodo = (req, res) => {
  const todo = todos.find((t) => t.id === req.params.id);

  if (!todo) {
    return res.status(404).json({ message: "Todo not found" });
  }

  const { title, isCompleted } = req.body;

  if (title !== undefined) todo.title = title;
  if (isCompleted !== undefined) todo.isCompleted = isCompleted;

  res.json(todo);
};

// Delete Todo
exports.deleteTodo = (req, res) => {
  const index = todos.findIndex((t) => t.id === req.params.id);

  if (index === -1) {
    return res.status(404).json({ message: "Todo not found" });
  }

  todos.splice(index, 1);

  res.status(204).send();
};
