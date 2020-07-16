// Required libraries
const { Composer } = require('micro-bot')
const bot = new Composer()
// Required data
const shiva = 'https://gfycat.com/belovedmajorchinesecrocodilelizard'
// Bot *start* command
bot.start((ctx) => {
    ctx.reply('Welcome to DevBhoomi(UK) bot. Type /help for bot commands.')
})
// Bot *help* command
bot.command(["help"], ctx => {
    let message = `
Help Reference:
/DevBhoomi - Get image of DevBhoomi
/Shiva - Get gif of Lord Shiva
/UK - Get different images of Uttarakhand
/UKLocation - Get the location of Uttarakhand
    `;
    ctx.reply(message)
})
// Bot *DevBhoomi* command
bot.command('DevBhoomi', (ctx) => ctx.replyWithPhoto({ source: './DevBhoomiUttarakhand.jpg' }))
// Bot *Shiva* command
bot.command('Shiva', (ctx) => ctx.replyWithAnimation({ url: shiva }))
// Bot *UK* command
bot.command('UK', (ctx) => ctx.replyWithMediaGroup([
    {
        media: { source: './haridwar.jpg' },
        type: 'photo'
    },
    {
        media: { source: './rishikesh.jpg' },
        type: 'photo'
    },
    {
        media: { source: './Nainital.jpg' },
        type: 'photo'
    },
    {
        media: { source: './Gangotri.jpg' },
        type: 'photo'
    },
    {
        media: { source: './Badrinath.jpg' },
        type: 'photo'
    },
    {
        media: { source: './KedarnathTemple.jpg' },
        type: 'photo'
    },
    {
        media: { source: './Yamunotri.jpg' },
        type: 'photo'
    }
]))
// Bot *UKLocation* command
bot.command('UKLocation', (ctx) => ctx.replyWithLocation('30.0668', '79.0193'))
// Bot *sticker* command
bot.on('sticker', (ctx) => {
    ctx.reply('👍')
})
// Bot launch
module.exports = bot