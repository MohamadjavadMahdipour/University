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


exports.createOrEditUniversity = asyncHandler(async (req, res, next) => {
  const {
    universityId,
    code,
    name,
    englishName,
    showOrder,
    isActive,
    province,
    eparchy,
    organizationCode,
    examCode,
    paymentCode,
    costCenter}=req.body
    
    
    if(universityId){
     
      const university=await University.findByIdAndUpdate(universityId,{
        code,
        name,
        englishName,
        showOrder,
        isActive,
        province,
        eparchy,
        organizationCode,
        examCode,
        paymentCode,  
        costCenter
        })
       return res.status(201).json({
          success:true,
          university
        })
    }
    const university=await University.create({
    code,
    name,
    englishName,
    showOrder,
    isActive,
    province,
    eparchy,
    organizationCode,
    examCode,
    paymentCode,
    costCenter
    })
    res.status(201).json({
      success:true,
      university
    })
});
exports.createOrEditCollage = asyncHandler(async (req, res, next) => {
  const {
    collageId,
    code,
    name,
    englishName,
    showOrder,
    isActive,province,
    eparchy,
    organizationCode,
    examCode,
    paymentCode,
    costCenter,
    universityId}=req.body
    if(collageId){
      const collage=await Collage.findByIdAndUpdate(collageId,{
        code,
        name,
        englishName,
        showOrder,
        isActive,province,
        eparchy,
        organizationCode,
        examCode,
        paymentCode,
        costCenter,
        universityId
        })
       return res.status(201).json({
          success:true,
          collage
        })
    }
    const collage=await Collage.create({
    code,
    name,
    englishName,
    showOrder,
    isActive,province,
    eparchy,
    organizationCode,
    examCode,
    paymentCode,
    costCenter,
    universityId
    })
    res.status(201).json({
      success:true,
      collage
    })
});
exports.createOrEditGroupe = asyncHandler(async (req, res, next) => {
  const {
    groupeId,
    code,
    name,
    englishName,
    showOrder,
    isActive,province,
    eparchy,
    organizationCode,
    examCode,
    paymentCode,
    costCenter,
    collageId}=req.body
    if(groupeId){
      const group=await Group.findByIdAndUpdate(groupeId,{
        code,
        name,
        englishName,
        showOrder,
        isActive,province,
        eparchy,
        organizationCode,
        examCode,
        paymentCode,
        costCenter,
        collageId
        })
       return res.status(201).json({
          success:true,
          group
        })
    }
    const group=await Group.create({
    code,
    name,
    englishName,
    showOrder,
    isActive,province,
    eparchy,
    organizationCode,
    examCode,
    paymentCode,
    costCenter,
    collageId
    })
    res.status(201).json({
      success:true,
      group
    })
});
exports.createOrEditcreateSection = asyncHandler(async (req, res, next) => {
  const {
    sectionId,
    code,
    name,
    englishName,
    showOrder,
    isActive,province,
    eparchy,
    organizationCode,
    examCode,
    paymentCode,
    costCenter,
    groupId}=req.body
    if(sectionId){
      const section=await Section.findByIdAndUpdate(sectionId,{
        code,
        name,
        englishName,
        showOrder,
        isActive,province,
        eparchy,
        organizationCode,
        examCode,
        paymentCode,
        costCenter,
        groupId
        })
       return res.status(201).json({
          success:true,
          section
        })
    }
    const section=await Section.create({
    code,
    name,
    englishName,
    showOrder,
    isActive,province,
    eparchy,
    organizationCode,
    examCode,
    paymentCode,
    costCenter,
    groupId
    })
    res.status(201).json({
      success:true,
      section
    })
});
exports.createOrEditEducationSystem = asyncHandler(async (req, res, next) => {
  const {
    educationSystemId,
    code,
    name,
    englishName,
    showOrder,
    isActive,province,
    eparchy,
    organizationCode,
    examCode,
    paymentCode,
    costCenter,
    sectionId}=req.body
    if(educationSystemId){
      const educationSystem=await EducationSystem.findByIdAndUpdate(educationSystemId,{
        code,
        name,
        englishName,
        showOrder,
        isActive,province,
        eparchy,
        organizationCode,
        examCode,
        paymentCode,
        costCenter,
        sectionId
      })
      return res.status(201).json({
        success:true,
        educationSystem
      })
    }
    const educationSystem=await EducationSystem.create({
      code,
      name,
      englishName,
      showOrder,
      isActive,province,
      eparchy,
      organizationCode,
      examCode,
      paymentCode,
      costCenter,
      sectionId
    })
     res.status(201).json({
      success:true,
      educationSystem
    })
    
});
exports.createOrEditFeild = asyncHandler(async (req, res, next) => {
  const {
    feildId,
    code,
    name,
    englishName,
    showOrder,
    isActive,province,
    eparchy,
    organizationCode,
    examCode,
    paymentCode,
    costCenter,
    educationSystemId}=req.body
    if(feildId){
      const feild=await Feild.findByIdAndUpdate(feildId,{
        code,
        name,
        englishName,
        showOrder,
        isActive,province,
        eparchy,
        organizationCode,
        examCode,
        paymentCode,
        costCenter,
        educationSystemId
        })
       return res.status(201).json({
          success:true,
          feild
        })
    }
    const feild=await Feild.create({
    code,
    name,
    englishName,
    showOrder,
    isActive,province,
    eparchy,
    organizationCode,
    examCode,
    paymentCode,
    costCenter,
    educationSystemId
    })
    res.status(201).json({
      success:true,
      feild
    })
  });
exports.createOrEditOrientiaion = asyncHandler(async (req, res, next) => {
  
   const {
    orientiaionId,
    code,
    name,
    isActive,
    organizationCode,
    feildId
   }=req.body
    
   if(orientiaionId){
    const orientiaion=await Orientiaion.findByIdAndUpdate(orientiaionId,{
      code,
      name,
      isActive,
      organizationCode,
      feildId
     }) 
      
   return  res.status(201).json({
      success:true,
      orientiaion
     })
   }
   const orientiaion=await Orientiaion.create({
    code,
    name,
    isActive,
    organizationCode,
    feildId
   }) 
    
   res.status(201).json({
    success:true,
    orientiaion
   })
   
});
exports.createOrEditUnderOrientiaion = asyncHandler(async (req, res, next) => {
  const {
    underOrientiaionId,
    code,
    name,
    isActive,
    organizationCode,
    orientiaionId
   }=req.body
    
   if(underOrientiaionId){
    const underOrientiaion=await UnderOrientiaion.findByIdAndUpdate(underOrientiaionId,{
      code,
      name,
      isActive,
      orientiaionId
     }) 
      
     res.status(201).json({
      success:true,
      underOrientiaion
     })
   }
   const underOrientiaion=await UnderOrientiaion.create({
    code,
      name,
      isActive,
      orientiaionId
   }) 
    
   res.status(201).json({
    success:true,
    underOrientiaion
   })
});


exports.getAllUniversity= asyncHandler(async (req, res, next) => {
      const allUniversity=await University.find()
      res.status(200).json({
        success:true,
        allUniversity
      })
})

exports.getAllCollageForUniversity= asyncHandler(async (req, res, next) => {
  const allCollage=await Collage.find({
    universityId:req.params.id
  })
  res.status(200).json({
    success:true,
    allCollage
  })
})
exports.getAllGroupeForCollage= asyncHandler(async (req, res, next) => {
  const allGroup=await Group.find({
    collageId:req.params.id
  })
  res.status(200).json({
    success:true,
    allGroup
  })
})
exports.getAllSectionForGroup= asyncHandler(async (req, res, next) => {
  const allSection=await Section.find({
    groupId:req.params.id
  })
  res.status(200).json({
    success:true,
    allSection
  })
})
exports.getAllEdeucationSystemForSection= asyncHandler(async (req, res, next) => {
  const allEducationsystem=await EducationSystem.find({
    sectionId:req.params.id
  })
  res.status(200).json({
    success:true,
    allEducationsystem
  })
})
exports.getAllFeildForEducationSystem= asyncHandler(async (req, res, next) => {
  const allFeild=await Feild.find({
    educationSystemId:req.params.id
  })
  res.status(200).json({
    success:true,
    allFeild
  })
})
exports.getAllOreintionForFeild= asyncHandler(async (req, res, next) => {
  const allOreintion=await Orientiaion.find({
    feildId:req.params.id
  })
  res.status(200).json({
    success:true,
    allOreintion
  })
})
exports.getAllUnderOreintionForOrentition= asyncHandler(async (req, res, next) => {
  const allUnderOreintion=await UnderOrientiaion.find({
    orientiaionId:req.params.id
  })
  res.status(200).json({
    success:true,
    allUnderOreintion
  })
})

exports.removeUniversity= asyncHandler(async (req, res, next) => {
  const collageForUniversity=await Collage.find({
    universityId:req.params.id
  })  
  if(collageForUniversity.length!=0){
    return next(new ErrorResponse("This universty have collage","400")) 
  }
  await University.findByIdAndRemove(req.params.id)
  res.status(201).json({
    success:true,
  })
})

exports.removeCollage= asyncHandler(async (req, res, next) => {
  const groupForCollage=await Group.find({
    collageId:req.params.id
  })  
  if(groupForCollage.length!=0){
    return next(new ErrorResponse("This collage have group","400")) 
  }
  await Collage.findByIdAndRemove(req.params.id)
  res.status(201).json({
    success:true,
  })
})
exports.removeGroup= asyncHandler(async (req, res, next) => {
  const sectionForGroup=await Section.find({
    groupId:req.params.id
  })  
  if(sectionForGroup.length!=0){
    return next(new ErrorResponse("This group have section ","400")) 
  }
  await Group.findByIdAndRemove(req.params.id)
  res.status(201).json({
    success:true,
  })
})
exports.removeSection= asyncHandler(async (req, res, next) => {
  const educationSystemForsection=await EducationSystem.find({
    sectionId:req.params.id
  })  
  if(educationSystemForsection.length!=0){
    return next(new ErrorResponse("This group have section ","400")) 
  }
  await Section.findByIdAndRemove(req.params.id)
  res.status(201).json({
    success:true,
  })
})
exports.removeEducationSystem= asyncHandler(async (req, res, next) => {
  const fieldForEducationSystem=await Feild.find({
    educationSystemId:req.params.id
  })  
  if(fieldForEducationSystem.length!=0){
    return next(new ErrorResponse("This group have section ","400")) 
  }
  await EducationSystem.findByIdAndRemove(req.params.id)
  res.status(201).json({
    success:true,
  })
})
exports.removeFeild= asyncHandler(async (req, res, next) => {
  const orientiaionForFeild=await Orientiaion.find({
    feildId:req.params.id
  })  
  if(orientiaionForFeild.length!=0){
    return next(new ErrorResponse("This group have section ","400")) 
  }
  await Feild.findByIdAndRemove(req.params.id)
  res.status(201).json({
    success:true,
  })
})
exports.removeOreintion= asyncHandler(async (req, res, next) => {
  await Orientiaion.findByIdAndRemove(req.params.id)
  res.status(201).json({
    success:true,
  })
})
exports.removeUnderOreintion= asyncHandler(async (req, res, next) => {
  await UnderOrientiaion.findByIdAndRemove(req.params.id)
  res.status(201).json({
    success:true,
  })
})