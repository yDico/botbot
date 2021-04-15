const downloader = (prefix, botName, ownerName) => {
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

 *〈 DOWNLOADER 〉*
  
   ➔ *${prefix}pinterest* <query>
   • *Desc* : Baixar imagem do Pinterest
   
   ➔ *${prefix}ytmp3* <linkyt>
   • *Desc* : Baixe o vídeo do Youtube para mp3
   
   ➔ *${prefix}ytmp4* <linkyt>
   • *Desc* : Baixe o vídeo do Youtube
   
   ➔ *${prefix}tiktok* <linktiktok>
   •  *Desc* : Baixe o vídeo do TikTok

    *${ownerName}*,
   *Desenvolvedor © ${botName}`
}
exports.downloader = downloader
