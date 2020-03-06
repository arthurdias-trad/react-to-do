const path = require("path");
const router = require("express").Router();
const { getToDos, addToDo, deleteToDo, toggleDone } = require(path.join(
  "..",
  "controller",
  "controller"
));

router
  .route("/")
  .get(getToDos)
  .post(addToDo);

router
  .route("/:id")
  .put(toggleDone)
  .delete(deleteToDo);

module.exports = router;
