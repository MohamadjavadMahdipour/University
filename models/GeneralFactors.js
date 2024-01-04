const mongoose = require("mongoose");

const GeneralFactorsSchema = new mongoose.Schema(
  {
    theory:{
      type:Number,
      default:1
    },
    practical:{
      type:Number,
      default:1
    },
    language:{
      type:Number,
      default:1
    },
    workType:{
      type:Number,
      default:1
    },
    section:{
      type:Number,
      default:1
    },
    special:{
      type:Number,
      default:1
    },
    studentNumber:{
      type:Number,
      default:1
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("GeneralFactors",GeneralFactorsSchema);
