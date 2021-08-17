const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const studentSchema = new Schema({
  studentName: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("Student", studentSchema);
