const search = (prefix, botName, ownerName) => {
	return `
  *〈 ${botName} 〉*

  *〈 BOT INFO 〉*
   
   ➤ *Prefix* : 〈  ${prefix}  〉
   ➤ *Creator* : DicoSz @fernando.fch
   
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

  *〈 SEARCH 〉*
   
   ➔ *${prefix}wait
   • *Desc* : Enviar nome anime & cena curta
   
   ➔ *${prefix}ytsearch <query>
   • *Desc* : Pesquisar vídeo do youtube
   
   ➔ *${prefix}trendtwit
   • *Desc* : pesquisar tendências de vídeo no Twitter
   
    *${ownerName}*,
   *Desenvolvedor © ${botName}`
}
exports.search = search
