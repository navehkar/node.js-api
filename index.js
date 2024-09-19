//const { users, getUser } = require('./users.js');  // ייבוא המערך והפונקציה

//console.log(users[0].name);  
//console.log(getUser(1).name);

//const fs = require('fs'); 
//const path = require('path')
//const http = require('http')

//http.createServer((req, res) =>{
 //res.writeHead(200, {'Content-Type':'text/plane'});
 //req.end('hello, world!');
//}).listen(3000);
//const filePath = path.join(__dirname,'hello.txt')
//console.log(filePath);
//function createFile(){
  //  fs.writeFileSync('hello.txt','hello, world!');
//}
//function readFile(){
    //const data = fs.readFileSync('hello.txt','utf-8');
  //  console.log(data);
//}
//createFile()
//readFile()
const express = require('express')
const app = express()
app.use(express.json)
const users = [
    {id: 1, name: 'Alice'},
    {id: 2, name: 'Bob'},
    {id: 3, name: 'Charlie'},

];

app.post('/add-user',(req, res) =>{
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ error: 'Name is required' });
    }  
    const userExist= users.find((user) => user.name.includes())
    if(userExist){
        return res.status(400).json({ error: 'name already exist' });
    }  
    const newUser = { id: users.length+1, name };
    users.push(newUser);   
    return res.status(201).json(users); 
});

app.get('/users', (req, res) => {
  return res.json(users);
});

app.listen(3000, () =>{
    console.log('server is running on http://localhost:3000')
})
