const { Pool } = require('pg');

const connectionString = "postgresql://user2:12345678@localhost:5433/practica_db";

const pool = new Pool({connectionString});

// const mayor25 = async() => {
//     try {
//         await pool.connect();
//         const resultado = await pool.query('select * from estudiantes where edad > 25');
//         // console.table(resultado.rows);
//         return resultado.rows
//     } catch (err) {
//         console.log(err);
//     }
// }
// mayor25().then(res => {
//     console.log(res);
// })

// const apellidosDesc = async() => {
//     try {
//         await pool.connect();
//         const resultado = await pool.query('select * from estudiantes order by apellidos desc');
//         // console.table(resultado.rows);
//         return resultado.rows
//     } catch (err) {
//         console.log(err);
//     }
// }
// apellidosDesc().then(res => {
//     console.log(res);
// })

const todosCursos = async() => {
    try {
        const connection = await pool.connect();
        const resultado = await pool.query('select * from cursos');
        // console.table(resultado.rows);
        connection.end();
        return resultado.rows
    } catch (err) {
        console.log(err);
    }
}
todosCursos().then(res => {
    console.log(res);
})