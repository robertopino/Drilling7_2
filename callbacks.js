const { Pool } = require('pg');

const connectionString = "postgresql://user2:12345678@localhost:5433/practica_db";

const pool = new Pool({connectionString});

// pool.query('select * from estudiantes where edad > 25', (err, res) => {
//     if(err){
//         console.log(err);
//     } else {
//         console.log(res.rows);
//     }
// })

// pool.query('select * from estudiantes order by apellidos desc', (err, res) => {
//     if(err){
//         console.log(err);
//     } else {
//         console.log(res.rows);
//     }
// })

pool.query('select * from cursos', (err, res) => {
    if(err){
        console.log(err);
    } else {
        console.table(res.rows);
    }
})

