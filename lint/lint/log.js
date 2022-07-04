const log = {
    info: (text) => {
        console.log(`\x1b[1m\x1b[34m${text}\x1b[0m`)
    },
    error: (text) => {
        console.log(`\x1b[1m\x1b[31m> ${text}\x1b[0m`)
    },
    success: (text) => {
        console.log(`\x1b[32m\x1b[1m${text}\x1b[0m`)
    }
}

module.exports = log
