const stalk = (prefix, botName, ownerName) => {
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

  *〈 STALK 〉*
   
   ➔ *${prefix}tiktokstalk* <username>
   • *Desc* : obter informações do tiktok, usuário
   ➔ *${prefix}igstalk* <username>
   • *Desc* : obter informações do instagram usuário
   
    *${ownerName}*,
   *Desenvolvedor © ${botName}`
}
exports.stalk = stalk
