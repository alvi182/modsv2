// Buat Lu Yang Jual Sc Ini Yang Jujur Jangan Samp Nipu Apalagi Lari Dari Tanggung Jawab



const fs = require('fs')
const chalk = require('chalk')

global.gr = 'https://whatsapp.com/channel/0029VaDF1f00QeafOd4i6d3l'
global.ig = '@syva.204' // ubah aja
global.email = 'Bandars4bu03@gmail.com' //serah
global.region = 'indonesia' // serah
//—————「 Set Nama Own & Bot 」—————//
global.ownername = 'AkmalMods' //ubah jadi nama mu, note tanda ' gausah di hapus!
global.domain = 'isi kalo ada' // Isi Domain Lu
global.apikey2 = 'isi kalo ada' // Isi Apikey Plta Lu
global.capikey2 = 'isi kalo ada' // Isi Apikey Pltc Lu
global.eggsnya = '15' // id eggs yang dipakai
global.location = '1' // id location
//=================================================//
global.apitokendo = '-' // isi apimu
global.apilinode = '-' // isi apimu
//=================================================//
global.owner = ['6281223720214'] // ubah aja pake nomor lu
//==========================BY Hw Mods=======================//
global.keyopenai = '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'
//====================BY Hw Mods=============================//
global.botname = 'AkmalMods' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
global.packname = 'AkmalMods' // ubah aja ini nama sticker
global.author = 'AkmalMods' // ubah aja ini nama sticker
global.prefa = ['','!','.',',','🐤','🗿']
global.sessionName = 'haikal' //Gausah Juga
global.themeemoji = '🪀' //Gausah Juga
global.sp = '⭔' // Gausah Juga
global.wlcm = []
global.wlcmm = []
global.anticall = false
//=================================================//
//Gausah Juga
global.limitawal = {
    premium: "Infinity",
    free: 100
}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})