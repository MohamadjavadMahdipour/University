const asyncHandler = require("../middleware/async");
const ErrorResponse = require("../utils/errorResponse");
const University = require("../models/University");
const Collage = require("../models/College");
const Feild = require("../models/Feild");
const EducationSystem = require("../models/EducationSystem");
const Group = require("../models/Group");
const Section = require("../models/Section");
const Orientiaion = require("../models/Orientation");
const UnderOrientiaion = require("../models/UnderOrientation");
const GeneralFactors=require("../models/GeneralFactors");
const LessonTypeEducation = require("../models/LessonTypeEducation");
const LessonTypeTuition=require("../models/LessonTypeTuition")


exports.createOrEditGenerateFactor = asyncHandler(async (req, res, next) => {
    const {theory,practical,language,workType,section,special,studentNumber}=req.body
     
    const isExist=await GeneralFactors.find()

    if(isExist.length==0){
       const generalfactors=await GeneralFactors.create({
            theory,
            practical,
            language,
            workType,
            section,
            special,
            studentNumber
        })
        return res.status(201).json({
           success:true,
           generalfactors
         })
    }

    const generalfactors= await GeneralFactors.findByIdAndUpdate(isExist[0],{
        theory,
        practical,
        language,
        workType,
        section,
        special,
        studentNumber
     })

    
  
    res.status(201).json({
      success:true,
      generalfactors
    })
});

exports.lessonTypeEducationCreateOrEdit = asyncHandler(async (req, res, next) => {
  const {lessonTypeId,name}=req.body
  
  if(lessonTypeId){
    const lessonType=await LessonTypeEducation.findByIdAndUpdate(lessonTypeId,{
        name
    })
    
     return res.status(201).json({
       success:true,
       lessonType
     })
  }
  const lessonType=await LessonTypeEducation.create({name})
   res.status(201).json({
    success:true,
    lessonType
  })
});
exports.createOrgenerateLessonTypeTuition = asyncHandler(async (req, res, next) => {
  const {lessonTypeTuitionId,name,type,price}=req.body
 
   if(lessonTypeTuitionId){
    const lessonType=await LessonTypeTuition.findByIdAndUpdate(lessonTypeTuitionId,{
        name,
        type,
        price
    })
    return res.status(201).json({
        success:true,
        lessonType
      })
   }
   const lessonType=await LessonTypeEducation.create({name})
   res.status(201).json({
    success:true,
    lessonType
  })

});
