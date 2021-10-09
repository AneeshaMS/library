const express=require("express");
const app=new express();
const port=process.env.PORT||4500;

const nav=
        [
            {link:'./', name:'Home'},
            {link:'/books',name:'Books'},
            {link:'/authors',name:'Authors'},
            {link:'/adminbook',name:'Add Book'},
            {link:'/adminauthor',name:'Add Author'},
            {link:'/signin',name:'Sign In'},
            {link:'/signupval',name:'Sign Up'}
        ]


const booksRouter=require('./src/routes/bookRoutes.js')(nav);
const authorRouter=require('./src/routes/authorRoutes.js')(nav);
const signupRouter=require('./src/routes/signupRoutes.js')(nav);
const signinRouter=require('./src/routes/signinRoutes.js')(nav);
const adminbookRouter=require('./src/routes/adminbookRoutes.js')(nav);
const adminauthorRouter=require('./src/routes/adminauthorRoutes.js')(nav);


app.use(express.static('./public'));
 app.use('/books',booksRouter);
 app.use('/authors',authorRouter);
 app.use('/signupval',signupRouter);
 app.use('/signin',signinRouter);
 app.use('/adminbook',adminbookRouter);
 app.use('/adminauthor',adminauthorRouter);

 
app.set('view engine','ejs');
app.set('views', './src/views');
app.get('/',function(req,res){
    res.render("index",{nav});
       
});

app.listen(port,()=>{
    console.log("Server ready at "+ port)});

