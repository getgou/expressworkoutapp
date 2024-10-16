
const fs = require('fs')
const saveToDatabase =(DB) =>{  //Path to the file; home/getgou/expressworkoutapp/src/database/db.json
    fs.writeFileSync('./db.json', JSON.stringify(DB,null,2),{
        encoding: "utf-8"
    });

};
 module.exports ={saveToDatabase}