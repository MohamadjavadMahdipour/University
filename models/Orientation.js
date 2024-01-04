const mongoose = require("mongoose");

const OrientationSchema = new mongoose.Schema(
  {
    code: {
      type: String,
      unique: [true, "Please add an unique code"],
    },
    name: {
      type: String,
      unique: [true, "Please add an unique name"],
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    organizationCode: {
      type: String,
    },
    feildId: {
      type: mongoose.Schema.ObjectId,
      ref: "Feild",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Orientation",OrientationSchema);
