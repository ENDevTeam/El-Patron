import DiscordJS, { Intents } from 'discord.js'
import dotenv from 'dotenv'
dotenv.config()

const allowedChannelIDs = 
[
    '916980485073297468',
    '919661849228771478'
]

const pepegaId = '604659053398065178'

const bot = new DiscordJS.Client
({
    intents:
    [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
})

bot.on('ready', () =>
{
    console.log("El Patron byl zapnut.")

    bot.user?.setActivity('ENDev', {type: 'WATCHING'})
})

bot.on('messageCreate', (message) =>
{
    if (message.member?.id == pepegaId)
    {
        if (Math.floor(Math.random() * 10) == 7)
        {
            message.reply("STFU")
        }

        return;
    }

    if (!allowedChannelIDs.includes(message.channelId)) return;

    switch (message.content.toLowerCase())
    {
        case "reee":
            message.reply("FOKIN NORMIES")
            break;
    }
})

bot.login(process.env.token)
