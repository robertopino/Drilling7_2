const { Pool } = require('pg');

const connectionString = "postgresql://user2:12345678@localhost:5433/practica_db";

const pool = new Pool({connectionString});

// const consulta = {
//     text: 'select * from estudiantes where edad > $1',
//     values: [25]
// }

// pool.query(consulta, (err, res) => {
//     if(err){
//         console.log(err);
//     } else {
//         console.table(res.rows);
//         pool.end();
//     }
//     })

    // const consulta = {
    //     text: 'select * from estudiantes order by apellidos desc',
    // }
    
    // pool.query(consulta, (err, res) => {
    //     if(err){
    //         console.log(err);
    //     } else {
    //         console.table(res.rows);
    //         pool.end();
    //     }
    //     })

        const consulta = {
            text: 'select * from cursos',
            // rowMode: 'array'
        }
        
        pool.query(consulta, (err, res) => {
            if(err){
                console.log(err);
            } else {
                console.table(res.rows);
                pool.end();
            }
            })

