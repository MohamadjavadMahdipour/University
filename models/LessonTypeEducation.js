const mongoose = require("mongoose");

const LessonTypeEducationSchema = new mongoose.Schema(
  {
    name:{
        type:String,
        required:true,
        unique:true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("LessonTypeEducation",LessonTypeEducationSchema);
