const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', (message) => {
    const args = message.content.slice().trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    //Role Detection Code by https://www.github.com/10Nates -- Can be used in deeper code threads

    //function setup
    function memberdetect() {
        //Split first argument into letters
        letters = args[0].split('')
        console.log(letters)
        //detect if there is a mention (they are <@numbers> in plain text)
        if (letters[1] == '@') {
            console.log('Detector Detected mention')
            return (true)
        } else {
            console.log('Detector Detected no mention')
            return (false)
        }
    }

    function roledetect() {
        console.log(message.content + ' - ' + message.author.username)
        //Split first argument into letters
        letters = args[0].split('')
        console.log(letters)
        //detect if the mention is a role (roles have <@&numbers>)
        if (letters[2] == '&') {
            console.log('Detector Detected role')
            return (true)
        } else {
            console.log('Detector Detected no role')
            return (false)
        }
    }




    //command detection
    if (command === '!mentioncypher') {
        //mention detection
        if (memberdetect()) {
            //detect if mention is role, react accordingly
            if (roledetect()) {
                console.log(roledetect)
                message.channel.send('This is a role')
                console.log('role')
            } else {
                message.channel.send('This is a member')
                console.log('member')
            }
            //state mention was detected
            message.channel.send('mention detected')
        } else {
            //return if it isn't a mention
            message.channel.send('No mention was inputted')
        }
    }

});

bot.login('NotyourbotgxDDYzjigyMDQ0.doot-g.edcBqqqUwUABcd00bigzig_r-ZZ')