const express = require("express");

const router = express.Router();

const admin = require("../controller/admin");

router.get("/", admin.homePage);

router.get("/createStudent", admin.createStudent);

router.post("/createStudent", admin.postCreateStudent);

router.get("/createMentor", admin.createMentor);

router.post("/createMentor", admin.postcreateMentor);

router.get("/assignmentorstudent", admin.assignmentorstudent);

router.post("/assignmentorstudent", admin.assignmentorstudentpost);

module.exports = router;
