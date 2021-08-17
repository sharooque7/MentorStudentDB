const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MentorSchema = new Schema({
  MentorName: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("Mentor", MentorSchema);
