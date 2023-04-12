const express = require('express');
const { createEmployee, getEmployees, getaEmployee, deleteaEmployee ,updatedEmployee } = require('../controller/employeeCtrl');
const router = express.Router();


router.get("/all-employees",getEmployees);
router.get("/:id",getaEmployee);
router.delete("/:id", deleteaEmployee);
router.post("/register",createEmployee);

router.put("/update/:id",updatedEmployee );



module.exports= router;