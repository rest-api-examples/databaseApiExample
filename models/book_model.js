const db = require('../database.js');

const book={

    getAllBooks(callback){

        return db.query('SELECT * FROM book',callback);
    },
    getOneBook(id, callback){
        return db.query('SELECT * FROM book WHERE id_book=?',[id],callback);
    },
    addBook(insertData, callback){
        //tässä on SQL-injektio
        //datan lisäämiseen on käytettävä
        //binded parameters menetelmää
        const sql="insert into book values("+insertData.id_book+","+insertData.name+")";
        callback(sql);
    }
}

module.exports=book;