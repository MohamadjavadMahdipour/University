const mongoose = require("mongoose");

const GroupSchema = new mongoose.Schema(
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
  collageId:{
    type: mongoose.Schema.ObjectId,
    ref: "Collage",
  }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Group", GroupSchema);
