const Employee = require("../models/employee");

const createEmployee =async(req,res)=>{
    const email = req.body.email;
    const findUser = await Employee.findOne({email:email});
    if(!findUser){
        const newEmployee = await  Employee.create(req.body);
        res.json(newEmployee);

    }else{
        res.json("Employee  Already Exist");
    }

}


const getEmployees = async(req,res)=>{
    try{
        

        const page = Number(req.query.page)||1;
        const limit = Number(req.query.limit)||10;
        const skip = (page-1)*limit;
        const getEmployees = await Employee.find().skip(skip).limit(limit);

        
         
        res.json(getEmployees);
    }catch(err){
        res.json(err);
    }

};


const getaEmployee = async(req,res)=>{
    const {id } = req.params;
    try{
        const getaEmployee = await Employee.findById(id);
        res.json(getaEmployee);
    }catch(err){
        res.json(error);
    }

}
 
const deleteaEmployee = async(req,res)=>{
    const {id } = req.params;
    try{
       
        const deleteaEmployee = await Employee.findByIdAndDelete(id);
        res.json("Employee is deleted");
    }catch(err){
        res.json(error);
    }

}


const updatedEmployee = async (req, res) => {
    const { id } = req.params;

    try {
      
        await Employee.findByIdAndUpdate(id, { $set: { 
            EmployeeName: req?.body?.EmployeeName,
            jobTitle: req?.body?.jobTitle,
            email: req?.body?.email,
            mobile: req?.body?.mobile,
            Primary_Emergency_Contact:req?.body?.Primary_Emergency_Contact,
            Secondary_Emergency_Contact:req?.body?.Secondary_Emergency_Contact,
            city:req?.body?.city,
            state:req?.body?.state
        
         }});
        const getaEmployee = await Employee.findById(id);
      
      res.json(getaEmployee);
    } catch (error) {
      res.json(error);
    }
  };

module.exports = {createEmployee,getEmployees,deleteaEmployee,getaEmployee,updatedEmployee };
