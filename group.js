const axios = require("axios");

async function group() {
  let input = ["Pravin", "Surya", "Priya"];
  let result = {"Male": [], "Female": []};
  for (let j = 0; j < input.length; j++) {
    const url = "http://localhost:8080/api/employee/" + input[j];
    const response = await axios.get(url);
    const employee = response.data;
    try {
        result[employee[0].gender].push(employee[0].name);
    } catch(e) {
        console.log(employee);
    }
  }
  console.log('............................................................', result);
}

group();