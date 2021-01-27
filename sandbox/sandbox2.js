const crypto = require('crypto');

const secret = 'abcdefg';

let start = new Date().getTime()
const hash = crypto.createHmac('sha256', secret)
    .update('I love cupcakes')
    .digest('hex');
let end = new Date().getTime()
let time = end - start
console.log(time)
console.log(hash);

