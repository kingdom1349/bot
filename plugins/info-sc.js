let handler = async (m) => {

let anu =`
*❏––––––『 𝐒𝐂𝐑𝐈𝐏𝐓 𝐁𝐎𝐓 』––––––❏*

Pengen Scnya?
✨SC InI DI JUAL‼️
Harga ?? Sangat Murah

Minat ?? Chat Wa
https://youtube.com/@VinssBotz

⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕

${botdate}
`
await m.reply(anu)
}
handler.help = ['script', 'sc']
handler.tags = ['tools']
handler.command = /^(sc|script)$/i
handler.limit = false
export default handler