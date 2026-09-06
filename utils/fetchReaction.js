const axios = require('axios')

// Valid GIF reaction categories from the official Nekos.best API schema
const CATEGORIES = [
    'angry', 'baka', 'bite', 'bleh', 'blowkiss', 'blush', 'bonk', 'bored',
    'carry', 'clap', 'confused', 'cry', 'cuddle', 'dance', 'facepalm', 'feed',
    'handhold', 'handshake', 'happy', 'highfive', 'hug', 'kabedon', 'kick',
    'kiss', 'lappillow', 'laugh', 'lurk', 'nod', 'nom', 'nope', 'nya', 'pat',
    'peck', 'poke', 'pout', 'punch', 'run', 'salute', 'shake', 'shocked',
    'shoot', 'shrug', 'sip', 'slap', 'sleep', 'smile', 'smug', 'spin', 'stare',
    'tableflip', 'teehee', 'think', 'thumbsup', 'tickle', 'wag', 'wave',
    'wink', 'yawn', 'yeet', 'waifu',
]

module.exports = async (category) => {
    try {
        if (!CATEGORIES.includes(category)) return null

        const response = await axios.get(`https://nekos.best/api/v2/${category}`)
        return response.data.results?.[0] ?? null
    } catch (err) {
        console.error(err)
        return null
    }
}
