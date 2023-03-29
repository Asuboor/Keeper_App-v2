const mongoose=require("mongoose");

const KeeperSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },

});

const keeperModel=mongoose.model("notes",KeeperSchema);

module.exports=keeperModel;