const mongoose = require("mongoose");
const fileUserSchema = new mongoose.Schema({
  id: {
    type: String,
    required: [true, "id is required"],
  },

  image: {
    type: String,
    required: [true, "image is required"],
  },

  createAt: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("File", fileUserSchema);
