const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  id: {
    type: String,
    required: [true, "id is required"],
  },

  name: {
    type: String,
    required: [true, "name is required"],
  },
  age: {
    type: Number,
    required: true,
  },

  createAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", userSchema);
