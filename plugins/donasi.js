let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Pulsa/Gopay [085155333010]
│ • OVO/DANA [085155333010]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
