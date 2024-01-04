const mongoose = require("mongoose");

const LessonTypeTuitionSchema = new mongoose.Schema(
  {
    name:{
        type:String,
        required:true,
        unique:true
    },
    type:{
        type:String,
        required:true,
        enum:["theory","practical","workType"]
    },
    price:{
        type:String
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("LessonTypeTuition",LessonTypeTuitionSchema);
