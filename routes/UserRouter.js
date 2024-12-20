const express = require('express');
const router = express.Router();
const {Registeruser,Loginuser, GetDetails, Updateuser, Uploadresume, GetInterviews}= require("../controllers/UserController");
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

router.post("/register", Registeruser)
router.post("/login", Loginuser)
router.get("/getdetails", GetDetails)
router.post("/update", Updateuser)
router.post("/resumeupload", upload.single('resume'), Uploadresume)
router.get("/getinterviews", GetInterviews)

module.exports = { UserRouter: router };
