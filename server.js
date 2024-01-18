const express = require('express')
const { sigV4ASignBasic } = require('./sigv4a_sign')

const app = express()
const port = process.env.PORT || 3001

app.get('/', (req, res) => {
    var method = 'GET'
    var endpoint = 'https://dynamodb.us-east-2.amazonaws.com'
    var service = 'dynamodb'

    var headers = sigV4ASignBasic(method, endpoint, service)
    
    var hostHeaderValue = headers._flatten().find(pair => pair[0] === 'host')[1]
    var contentSHA = headers._flatten().find(pair => pair[0] === 'x-amz-content-sha256')[1]

    res.send(JSON.stringify(hostHeaderValue) + JSON.stringify(contentSHA))
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})
