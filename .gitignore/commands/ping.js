const Command = require('./command.js')

module.exports = class Ping extends Command {

    static match(message) {
        return message.content.match('ping')
    }
    static action(message) {
        message.reply('pong')
    }

}
