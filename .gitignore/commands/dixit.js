const Command = require('./command.js')

module.exports = class Dixit extends Command {

    static match(message) {
        return message.content.match(/di?/gi)
    }
    static action(message) {
        let args = message.content.split(/di?/gi)
        args.shift()

        message.reply(args.join(""))
    }

}
