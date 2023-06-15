const { Pool } = require('pg');

const connectionString = "postgresql://user2:12345678@localhost:5433/practica_db";

const pool = new Pool({connectionString});

// const texto = 'select * from estudiantes where edad > $1';

// const values = [25];

// pool.query(texto, values, (err, res) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.table(res.rows);
//     }
// } )

// const texto = 'select * from estudiantes order by apellidos desc';

// pool.query(texto, (err, res) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.table(res.rows);
//         pool.end();
//     }
// } )

const texto = 'select * from cursos';

pool.query(texto, (err, res) => {
    if(err) {
        console.log(err);
    } else {
        console.table(res.rows);
        pool.end();
    }
} )