const os = process
global.DeveloperMode = 'false' //true Or false
global.owner = ['6283102050562', '6283102050562'] || os.env["6283102050562"]// Put your number here
global.linkGC = ['http://bit.ly/Grupgabutbotv1']
global.mods = ['623102050562', '6283102050562'] // Want some help?
global.prems = ['623102050562', '6283102050562'] // Premium user has unlimited limit
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  vhtear: 'https://vhtear.com',
  zeks: 'https://api.zeks.xyz',
  clph: 'https://recoders-area.caliph.repl.co'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': '9c8ec9201f4a9b20',
  'https://recoders-area.caliph.repl.co': 'FreeApi',
  'https://vhtear.com': 'AdiOfficial404',
  'https://api.zeks.xyz': 'apivinz'
}

// Sticker WM
global.packname = 'bot Unisba'
global.author = 'ya jelaslah'

global.multiplier = 69 // The higher, The harder levelup

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
