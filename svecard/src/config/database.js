import sqlite3 from "sqlite3";

const SQLite3 = sqlite3.verbose();

// criadno a promise
function query(command, params, method = 'all'){
    return new Promise(function(resolve, reject){
        db[method](command, params, function(Error, result){
            if (Error)
                reject(Error)
            else
            resolve(result);
        });
    });
}


// aqui vamos criar a conexao
const db = new SQLite3.Database('banco.db', SQLite3.OPEN_READWRITE, function(Error){
    if (Error)
        return console.log("Erro ao conectar com o banco:" + Error.message);
});

export {db, query};