const express = require('express');
const port = 3000
const app = express();

const cors = require('cors'); 

app.use(express.static('../frontend'));

// app.get('/curriculo', (req,res) => {

//   res.render("index.html")
    
// })

const sqlite = require('sqlite');
const sqlite3 = require('sqlite3');

app.use(cors())
app.use(express.json())

app.get('/tbDados', (req,res)=>{
    async function insertDB() {
        let db = await sqlite.open({ filename: './bancodedados.db', driver: sqlite3.Database});

        const tbDados = await db.get('SELECT * FROM tbDados')

        res.json(tbDados)
        db.close()
    }
    insertDB()
})


app.listen(port, ()=>{
    console.log(`Server is running at:http://localhost:${port}`)
})


