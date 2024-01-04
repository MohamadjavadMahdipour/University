const mongoose = require("mongoose");

const LessonSchema = new mongoose.Schema(
  {
    //? Main Property
    code :{
        type: String
    },
    FeildsCode:[mongoose.Schema.ObjectId],
    name: {
      type: String,
      unique: [true, "Please add an unique name"],
    },
    englishName: {
      type: String,
    },
    arabicName:{
      type: String,
    },
    lessonType:{
        type:mongoose.Schema.ObjectId,
        ref:"LessonTypeEducation"
    },

    practicalUnitNumber:{
        type:"String"
    },
    theoryUnitNumber:{
        type:"String"
    },
    workTypeUnitNumber:{
        type:"String"
    },
    minUnitPassed:{
        type:"String"
    },
    maxUnitPassed:{
        type:"String"
    },
    totalLessonHour:{
        type:"String"
    },
    effectiveUnit:{
        type:"String"
    },
    theoryHours:{
        type:"String"
    },
    practicalHours:{
        type:"String"
    },
    workTypeHours:{
        type:"String"
    },
     isActive: {
      type: Boolean,
      default: true,
    },
    //? wage factor property wage be mani hagholzahme  
    theorySessionsNumber:{
        type:"String"
    },
    practicalSessionsNumber:{
        type:"String"
    },
    
    theoryFactor:{
        type:Number,
      },
      practicalFactor:{
        type:Number,
      },
      languageFactor:{
        type:Number,
      },
      workTypeFactor:{
        type:Number,
      },
      sectionFactor:{
        type:Number,
      },
      specialFactor:{
        type:Number,
      },
      studentNumberFactor:{
        type:Number,
      },
      //? Tuition section
      lessonTypeEducation:{
        type:mongoose.Schema.ObjectId,
        ref:"LessonTypeTuition"
      },
      lessonTypePractical:{
        type:mongoose.Schema.ObjectId,
        ref:"LessonTypeTuition"
      },
      lessonTypeWorkeType:{
        type:mongoose.Schema.ObjectId,
        ref:"LessonTypeTuition"
      },
      theoryUnitTuitionNumbers:{
         type:String
      },
      practicalUnitTuitionNumbers:{
        type:String
     },
     workTypeUnitTuitionNumbers:{
        type:String
     },
     feildCodeTuition:{
        type:String
     },
     specialTuition:{
        type:String
     },
     increaseTuitionPercent:{
         type:string
     },
     isHalfForSingleLesson:{
      type:Boolean,
      default:false
     },

     //? Scoring method  section

    minPassScore:{
        type:String
    },
      
    minPassScoreForGuest:{
        type:String,
    },

    minPassScoreForTransfer:{
        type:String,
    },
    minPassScoreForMatch:{
        type:String,
    },
    isEffective:{
        type:Boolean,
         default:true
    },

    scoreMethodType:{
        type:String,
        enum:["percentage","cumulative"] //? percentage yani darsad va cumlative yani tagamoei
    },

    scoreSection:[
        {name:{type:String}},
        {score:{type:String}}
    ],

    //? Other Information section

    testCode:{
        type:String
    },
    educationLevel:{
        type:String
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

module.exports = mongoose.model("Lesson", LessonSchema);
