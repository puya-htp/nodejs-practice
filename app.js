const express=require('express');

//express app
const app=express();
//register view engin
app.set('view engine', 'ejs')

//listen req
app.listen(3000);

app.get('/',(req,res)=>{
res.render('index',{title: 'Home'});
    //res.send('<p>About page</p>');
    //res.sendFile('./views/index.html',{root:__dirname });
});
app.get("/about", (req, res) => {
    res.render('about', {title:'About'})
  //res.send("<p>Home page</p>");
  // res.sendFile("./views/about.html", { root: __dirname });
});
//redirect
//app.get('/about-us',(req,res)=>{
    //res.redirect('/about');
//})
app.get('/blogs/create',(req,res)=>{
    res.render('create', {title:'blog page'})
})
//404page
app.use((req, res)=>{
    res.render('404',{title: 404});
   // res.status(404).sendFile('./views/404.html', {root: __dirname});
});