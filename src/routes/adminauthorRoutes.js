const express=require("express");
const adminauthorRouter=express.Router();

 function router(nav){ 
adminauthorRouter.get('/',function(req,res){
    res.render("adminauthor",{
        nav,
        title:'Library',
       
    });
});


return adminauthorRouter;
}

module.exports=router;