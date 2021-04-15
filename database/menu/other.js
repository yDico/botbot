const other = (prefix, botName, ownerName) => {
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

  *〈 OTHER 〉*
   
   ➔ *${prefix}send*
   ➔ *${prefix}wame*
   ➔ *${prefix}virtex*
   ➔ *${prefix}qrcode* <text>
   ➔ *${prefix}timer*
   ➔ *${prefix}fml*
   ➔ *${prefix}fml2*
   
    *${ownerName}*,
   *Desenvolvedor © ${botName}`
}
exports.other = other
