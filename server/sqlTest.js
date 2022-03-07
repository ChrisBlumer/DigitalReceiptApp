const express = require("express");
const app = express();
const { Connection, Request } = require("tedious");

// import Home from '../digitalreceipt/src/DigitalReceipt/Home'


// Create connection to database
const config = {
  authentication: {
    options: {
      userName: "cvb7126", // update me
      password: "Firedragon$7126" // update me
    },
    type: "default"
  },
  server: "digitalreciept.database.windows.net", // update me
  options: {
    database: "DigitalRecieptApp", //update me
    encrypt: true
  }
};

const connection = new Connection(config);

// Attempt to connect and execute queries if connection goes through
connection.on("connect", err => {
  if (err) {
    console.error(err.message);
  } else {
      app.get("/", (req, res) => {
        var temp = queryDatabase();
        console.log(temp)
        res.send("Hello World")
      })
    
  }
});

connection.connect();

function queryDatabase() {
  console.log("Reading rows from the Table...");

  // Read all rows from table
  const request = new Request(
    `SELECT TOP 20 *
     FROM Users`,
    (err, rowCount) => {
      if (err) {
        console.error(err.message);
      } else {
        console.log(`${rowCount} row(s) returned`);
      }
    }
  );

  request.on("row", columns => {
    columns.forEach(column => {
      console.log("%s\t%s", column.metadata.colName, column.value);
      
    });
    return columns
  });

  connection.execSql(request);
}

app.listen(3001, () => {
    console.log('Running in port 3001')
})