const mongoose = require("mongoose");

const agentSchema = new mongoose.Schema({
    username : {
        type:String,
        required:true
    },
    password:{
        type : String,
        required:true
    },
    role:{
        type:String,
        required:true
    }

});

module.exports = mongoose.model("Agent",agentSchema);