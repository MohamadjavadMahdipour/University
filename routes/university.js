const express = require("express");
const swaggerJsDoc=require("swagger-jsdoc")
const swaggerUi=require("swagger-ui-express")

const C = require("../controllers/university");

const { protect } = require("../middleware/auth");

const router = express.Router();
//? cu means c:create u:update
//?post Request
router.post("/cuuniversity",C.createOrEditUniversity)  

router.post("/cucollage",C.createOrEditCollage)  

router.post("/cugroup",C.createOrEditGroupe)

router.post("/cusection",C.createOrEditcreateSection)

router.post("/cueducationsystem",C.createOrEditEducationSystem)

router.post("/cufeild",C.createOrEditFeild)

router.post("/cuoreienteion",C.createOrEditOrientiaion)

router.post("/cuunderoreienteion",C.createOrEditUnderOrientiaion)

//?get Request

router.get("/university",C.getAllUniversity)

//! all :id is parent id for examole for collage id = universityId

router.get("/collage/:id",C.getAllCollageForUniversity)

router.get("/groupe/:id",C.getAllGroupeForCollage)

router.get("/section/:id",C.getAllSectionForGroup)

router.get("/educationsystem/:id",C.getAllEdeucationSystemForSection)

router.get("/feild/:id",C.getAllFeildForEducationSystem)

router.get("/oreintiaon/:id",C.getAllOreintionForFeild)

router.get("/underoreintian/:id",C.getAllUnderOreintionForOrentition)


module.exports = router;
