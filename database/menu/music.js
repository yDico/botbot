const music = (prefix, botName, ownerName) => {
        return `
  *〈 ${botName} 〉*

  *〈 BOT INFO 〉*
   
   ➤ *Prefixo* : 〈  ${prefix}  〉
   ➤ *Criador* : DicoSz @fernando.fch
   
 *〈 Sobre 〉*

➔ *${prefix}info* (error)
• *Desc* : Mostrar detalhes do bot

➔ *${prefix}blocklist*
• *Desc* : Mostrar usuário bloqueado

➔ *${prefix}chatlist* (error)
• *Desc* : Mostrar todos os usuários de bate-papo

➔ *${prefix}ping*
• *Desc* : Mostrar velocidade do bot de conexão

➔ *${prefix}bugreport* <text>
• *Desc* : Reportar bug ao proprietário do bot

  *〈 MUSIC 〉*
   
   ➔ *${prefix}play* <music_name>
   • *Desc* : Tocar música de áudio
   
   ➔ *${prefix}joox* <music_name>
   • *Desc* : tocar música joox
   
   ➔ *${prefix}lirik* <music_name>
   • *Desc* : Pesquisar letras de música
   
   ➔ *${prefix}chord* <music_name>
   • *Desc* : Pesquisar letras de música de acordes
   
    *${ownerName}*,
   *Desenvolvedor © ${botName}`
}
exports.music = music
