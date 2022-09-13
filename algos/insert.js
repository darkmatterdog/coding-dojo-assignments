// return SQL statement with quotes
function insert(tableName, columns){

}

function insertFunctional(tableName, columns){
    let keys = values = '';

    for(const [key, value] of Object.entries(columns)){
        keys += `${key},`
        if(typeof value == "string"){
            values += `'${value}',`
        }
        else{
            values += `${value},`
        }
    }

    keys = keys.slice(0,keys.length-1);
    values = values.slice(0, values.length-1);

    return `INSERT INTO ${tableName} (${keys}) VALUES (${values});`;
}


// ## TEST CASES ##
const table = "users";
const insertData1 = { first_name: "John", last_name: "Doe", boolean: true, number: 111 };

const expected1 = "INSERT INTO users (first_name, last_name) VALUES ('John', 'Doe');";


console.log(insertFunctional(table, insertData1));