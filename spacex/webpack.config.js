const path = require('path')

module.exports = {
    entry : './scripts/script.js',
    output : {
        path : path.resolve(__dirname,'./directory'),
        filename : 'noice.js'
    }
}