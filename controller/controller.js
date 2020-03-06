const path = require("path");
const Todo = require(path.join("..", "models", "Todo"));

// desc   get all todos
// @route GET /api/todos
exports.getToDos = async (req, res, next) => {
  try {
    const todos = await Todo.find();

    return res.status(200).json({
      success: true,
      count: todos.length,
      data: todos
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Server error"
    });
  }
};

// desc   post a todo
// @route POST /api/todos
exports.addToDo = async (req, res, next) => {
  try {
    const todo = await Todo.create(req.body);
    return res.status(201).json({
      success: true,
      todo
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      error: "Server error"
    });
  }
};

exports.toggleDone = async (req, res, next) => {
  try {
    let todo = await Todo.findById(req.params.id, (err, todo) => {
      if (err) {
        throw err;
      }
      todo.done = !todo.done;
      todo.save();
    });

    return res.status(201).json({
      success: true,
      todo
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      error: "Server error"
    });
  }
};

// desc   delete a todo
// @route DELETE /api/todos/:id
exports.deleteToDo = async (req, res, next) => {
  try {
    const todo = await Todo.findById(req.params.id);

    if (!todo) {
      return res.status(404).json({
        success: false,
        error: "No todo found"
      });
    }
    console.log(todo);
    await todo.remove();

    return res.status(200).json({
      success: true,
      data: {},
      id: req.params.id
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: `Server error: ${error.message}`
    });
  }
};
