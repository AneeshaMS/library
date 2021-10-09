const express=require("express");
const adminbookRouter=express.Router();

 function router(nav){ 
adminbookRouter.get('/',function(req,res){
    res.render("adminbook",{
        nav,
        title:'Library',
       
    });
});


return adminbookRouter;
}

module.exports=router;