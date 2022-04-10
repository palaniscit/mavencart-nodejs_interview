const express = require('express');
const app = express();
const fs = require("fs");

app.get('/', (req, res) => {
  res
    .status(200)
    .send('Hello, world!')
    .end();
});

app.get('/api/employee/:name', function(req, res) {
  fs.readFile("./employee.json", "utf8", (err, jsonString) => {
    if (err) {
      console.log("File read failed:", err);
      return;
    }
    const employees = JSON.parse(jsonString);
    var name = req.params.name;
    const promise = new Promise((resolve, reject) => {
      var result = [];
      for( var i=0; i<employees.length; i++) {
        if(employees[i].name == name) {
          result.push(employees[i]);
        }
      }
      if(result.length == 0) {
        return reject();
      }
      return resolve(result);
    });
    promise.then((result) => {
      res.send(result);
      console.log("200 - /api/employee/"+name+" api called");
    }).catch(() => {
      res.send(name+ " is not available");
    });
  });
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});