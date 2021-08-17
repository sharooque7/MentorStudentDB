const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Relation = new Schema({
  Mentor: {
    type: Schema.Types.ObjectId,
    ref: "Mentor",
  },
  student: {
    type: [Schema.Types.ObjectId],
    ref: "Student",
  },
});
module.exports = mongoose.model("realtion", Relation);
