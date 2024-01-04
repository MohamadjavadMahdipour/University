const mongoose = require("mongoose");

const UniversitySchema = new mongoose.Schema(
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
    type:String,
    
  },
  paymentCode:{
    type:String,
    
  },
    costCenter:{
        type:String
  }

  },
  { timestamps: true }
);

module.exports = mongoose.model("Universty", UniversitySchema );
