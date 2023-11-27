const { v4: uuidv4 } = require("uuid");
const UserFile = require("../models/file.model");

const postImage = async (req, res) => {
  try {
    const newUser = new UserFile({
      id: uuidv4(),
      image: req.file.filename,
    });
    await newUser.save();
    res.status(200).send(newUser);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  postImage,
};
