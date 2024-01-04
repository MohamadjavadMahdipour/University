const mongoose = require("mongoose");

const CollageSchema = new mongoose.Schema(
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
  universityId:{
    type: mongoose.Schema.ObjectId,
    ref: "Universty",
  }

  },
  { timestamps: true }
);

module.exports = mongoose.model("Collage", CollageSchema );
