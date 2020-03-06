const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
  text: { type: String, required: [true, "Enter some text"] },
  done: { type: Boolean, default: false },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Todo", todoSchema);
