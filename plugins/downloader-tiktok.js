let { tiktok } = require('api-dylux')
let handler = async (m, {conn, text, command, usedPrefix}) => {
    if (!text) throw `Masukkan Link Tiktok!`
    let res = await tiktok(text)
    conn.sendFile(m.chat, res.play, null, null, m)
    conn.sendFile(m.chat, res.music, null, null, m)
}
handler.help = ['tiktok']
handler.command = /^(tiktok|tt|tiktokdl|tiktoknowm|dltt)$/i
handler.tags = ['downloader'];
handler.limit = true;
handler.group = false;
handler.premium = false;
handler.owner = false;
handler.admin = false;
handler.botAdmin = false;
handler.fail = null;
handler.private = false;
module.exports = handler;
