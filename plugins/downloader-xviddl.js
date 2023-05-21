var fetch = require("node-fetch")
var handler = async (m, {
 text, 
 usedPrefix, 
 command
 }) => {
if (!text) throw 'Masukkan Query Link!'
 
let res = await xvideosdl(text)

conn.sendMessage(m.chat, { video: { url: res.url }, fileName: 'xnxx.mp4', mimetype: 'video/mp4' }, { quoted: m })
  }                                                    
handler.command = handler.help = ['xvideosdown','xdown'];
handler.tags = ['internet'];
handler.premium = true
module.exports = handler;
