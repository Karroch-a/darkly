const http = require('http');
const fs = require('fs');
const xpath = require('xpath')
const axios = require('axios');
dom = require('xmldom').DOMParser
    axios.get('http://10.12.100.20/.hidden/').then(res => {
        const doc = new dom().parseFromString(res.data);
        const nodes = xpath.select("//a", doc)
        const p = process.argv[2]
            if (nodes[p].firstChild.data !== 'README' && nodes[p].firstChild.data !== '../')
            {
                axios.get(`http://10.12.100.20/.hidden/${nodes[p].firstChild.data }`).then(resp => {
                    const doc = new dom().parseFromString(resp.data);
                    const items = xpath.select("//a", doc)
                    items.map((item, i) => {
                        if (item.firstChild.data !== 'README' && item.firstChild.data !== '../')
                        {
                            setTimeout(function()
                            {
                                axios.get(`http://10.12.100.20/.hidden/${nodes[p].firstChild.data}${item.firstChild?.data}`).then(testtt => {
                                    const doc = new dom().parseFromString(testtt.data);
                                    const folder = xpath.select("//a", doc)
                                    folder.map(folder => {
                                        if (folder.firstChild.data !== 'README' && folder.firstChild.data !== '../')
                                        {
                                            http.get(`http://10.12.100.20/.hidden/${nodes[p].firstChild.data}${item.firstChild?.data}${folder.firstChild.data}README`, (respo) => {
                                            let data = '';
                                            respo.on('data', function (chunk) {
                                                    // console.log(chunk.toString().substr(0,1))
                                                    if (Number(chunk.toString().substr(0,1)))
                                                    {
                                                        fs.writeFileSync('./data.txt', chunk + `http://10.12.100.20/.hidden/${nodes[p].firstChild.data}${item.firstChild?.data}${folder.firstChild.data}README`)
                                                    }
                                                  });
                                            })
                                        }
                                    })
                                })
                            }, 6000)
                        }
                    })
                })
            }
        })
