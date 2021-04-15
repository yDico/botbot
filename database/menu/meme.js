const meme = (prefix, botName, ownerName) => {
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

  *〈 MEME 〉*
   
   ➔ *${prefix}meme*
   • *Desc* : enviar meme aleatório [eng]
   ➔ *${prefix}memeindo*
   • *Desc* : enviar meme aleatório [indo]
   
    *${ownerName}*,
   *Desenvolvedor © ${botName}`
}
exports.meme = meme
