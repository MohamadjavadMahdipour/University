const mongoose = require("mongoose");

const UnderOrientationSchema = new mongoose.Schema(
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
    OrientationId: {
      type: mongoose.Schema.ObjectId,
      ref: "Orientation",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("UnderOrientation",UnderOrientationSchema);
