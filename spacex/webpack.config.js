const path = require('path')

module.exports = {
    entry : './scripts/script',
    output : {
        path : path.resolve(__dirname,'./directory'),
        filename : 'noice.js'
    }
}