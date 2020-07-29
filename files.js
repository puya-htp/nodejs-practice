const fs=require('fs');

/*fs.writeFile('./blog.txt', 'Hello, world', ()=>{
    console.log('file was written');
})
fs.writeFile('./blog1.txt', 'Hello, again', () => {
    console.log('file was written');
})*/
/*if (!fs.existsSync('./assets')) {
    fs.mkdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('Folder created')
    })
} else{
    fs.rmdir('./assets',(err)=>{
        if(err){
            console.log(err)
        }
        console.log('Folder deleted');
    })
}*/

//deleting files

if (fs.existsSync('./docs/deleteme.txt')){
    fs.unlink('./docs/deleteme.txt',(err)=>{
        if(err){
            console.log(err)
        }
        console.log('file deleted');
    })
}
