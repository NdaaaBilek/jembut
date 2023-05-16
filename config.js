
// - Ubah nomor owner dan wm di sini.
// + Daftar apikey terlebih dahulu sebelum menggunakan svript ini link
  // https://api.botcahx.live
// - Jika sudah mendaftar salin key yang ada di profie dan paste di global.btc
// - Contoh global.btc = 'xzRhejka'
// - Jika sudah maka lanjutkan untuk mengubah nomor owner dan wm.

global.owner = ['6285640575421', '6285711537991', '62856010392515']  
global.mods = ['6285640575421'] 
global.prems = ['6285640575421', '6287787758538', '6285711537991', '6281368610172', '6282370999943', '6285854330889', '6283149404672', '6281320433787']
global.nameowner = 'Ndaa'
global.numberowner = '6285640575421' 
global.mail = '?' 
global.dana = '6285640575421'
global.pulsa = '6285640575421'
global.gopay = '6285640575421'
global.namebot = 'NdaaBotz-Md'
global.gc = 'https://chat.whatsapp.com/JnNNHb8wah55lTeaxjLjwy'
global.web = 'https://github.com/NdaaaBilek'
global.instagram = 'https://instagram.com/prm2.0'
global.wm = '© Ndaabotz'
global.watermark = wm
global.wm2 = '⫹⫺ Ndaabotz-Md'
global.wm3 = '© Ndaabotz'
global.wm4 = '© Ndaabotz'
global.wait = '_*Tunggu sedang di proses...*_'
global.eror = '_*Server Error*_'
global.benar = 'Benar ✅\n'
global.salah = 'Salah ❌\n'
global.stiker_wait = '*⫹⫺ Stiker sedang dibuat...*'
global.packname = 'Made with'
global.author = 'NdaaBotz WhatsApp'


global.btc = 'admin' //Daftar terlebih dahulu https://api.botcahx.live
global.APIs = { 
  tio: 'https://api.botcahx.live'
}
global.APIKeys = { 
  'https://api.botcahx.live': 'admin' //isi apikey mu https://api.botcahx.live
}

global.multiplier = 10
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      sampah: '🗑',
      armor: '🥼',
      sword: '⚔️',
      kayu: '🪵',
      batu: '🪨',
      string: '🕸️',
      kuda: '🐎',
      kucing: '🐈' ,
      anjing: '🐕',
      petFood: '🍖',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
