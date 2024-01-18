const { sigV4ASignBasic } = require('./sigv4a_sign')

var method = 'GET'
var endpoint = 'https://dynamodb.us-east-2.amazonaws.com'
var service = 'dynamodb'

var headers = sigV4ASignBasic(method, endpoint, service)
var hostHeaderValue = headers._flatten().find(pair => pair[0] === 'host')[1]
var contentSHA = headers._flatten().find(pair => pair[0] === 'x-amz-content-sha256')[1]

console.log("host:", hostHeaderValue)
console.log("x-amz-content-sha256:", contentSHA)