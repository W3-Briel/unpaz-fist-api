const DB = require("./bbdd.json")

class Conection{
    /**
     * @type {(Array | object)}
    */
    table;

    /**
     * coneccion a una tabla de la bbdd (nuestro json)
     * @param {string} tableName 
    */
    constructor(tableName){
        this.table = DB && DB[tableName]
    }

    /**
     * obtener todos los resultados de esta tabla
     * @returns { Array.<object>}
    */
    getAll(){
        return this.table
    }

    /**
     * obtener un elemento de la tabla segun key: value
     * @param {object} keyValue
     * @returns {object | undefined}
    */
   getOneWith(keyValue){
        let key = Object.keys(keyValue)[0]
        let value = Object.values(keyValue)[0]
        let rowIndex = this.table.findIndex(r => r[key] == value)

        return this.table[rowIndex]
    }
}

module.exports = { commentsBBDD: new Conection("comments")}