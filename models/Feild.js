const mongoose = require("mongoose");

const FeildSchema = new mongoose.Schema(
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
      default: true,
    },

    measurement: {
      type: String,
      enum: ["hour", "unit"],
    },
    prefixEducateCode: {
      type: String,
      unique: [true, "Please add an unique code"],
    },
    educateLevel: {
      type: String,
    },
    isAboutMinistryofHealth: {
      type: Boolean,
      default: false,
    },
    isCanGetGuest:{
        type: Boolean,
        default: false,
    },
    organizationCode: {
      type: String,
    },
    examCode: {
      type: Number,
      unique: true,
    },
    paymentCode: {
      type: Number,
      unique: true,
    },
    costCenter: {
      type: String,
    },
    educationSystemId: {
      type: mongoose.Schema.ObjectId,
      ref: "EducationSystem",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Feild", FeildSchema);
