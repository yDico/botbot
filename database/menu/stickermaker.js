const stickermaker = (prefix, botName, ownerName) => {
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

  *〈 CRIAR FIGURINHAS 〉*
   
   ➔ *${prefix}sticker*
   • *Desc* : Cria uma figurinha com a imagem
   
   ➔ *${prefix}stickergif*
   • *Desc* : Cria uma figurinha com Gif/Video
   
   ➔ *${prefix}ttp*
   • *Desc* : Cria uma figurinha com o texto enviado
   
    *${ownerName}*,
   *Desenvolvedor © ${botName}`
}
exports.stickermaker = stickermaker
