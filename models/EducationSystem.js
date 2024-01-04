const mongoose = require("mongoose");

const EducationSystem = new mongoose.Schema(
  {
    code: {
      type: String,
      unique: [true, "Please add an unique code"],
    },
    name: {
      type: String,
      unique: [true, "Please add an unique name"],
    },

    englishName: {
      type: String,
    },

    showOrder: {
      type: String,
    },

    isActive: {
      type: Boolean,
      default:true
    },
    
    province:{
        type: String,
    },
    
  eparchy:{
     type:String
  },
  organizationCode :{
    type:String
  },
  examCode:{
    type:Number,
    unique:true
  },
  paymentCode:{
    type:Number,
    unique:true
  },
    costCenter:{
        type:String
  },
  sectionId:{
    type: mongoose.Schema.ObjectId,
    ref: "Section",
  }
  },
  { timestamps: true }
);

module.exports = mongoose.model("EducationSystem", EducationSystem);
