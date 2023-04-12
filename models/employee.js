
const mongoose = require('mongoose'); 



// Declare the Schema of the Mongo model
var EmployeeSchema = new mongoose.Schema({
    EmployeeName:{
        type:String,
        required:true,
        
    },
    jobTitle:{
        type:String,
        required:true,
        
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    mobile:{
        type: Array,
        default: [],
    },
    Primary_Emergency_Contact:{
        type:Object

    },
    Secondary_Emergency_Contact:{
        type:Object,

    },
    
    Address:{
        type:String,
        
    },
    city:{
        type:String,
    },
    state:{
        type:String,
    }

});



//Export the model
module.exports = mongoose.model('Employee', EmployeeSchema);