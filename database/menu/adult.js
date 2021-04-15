const adult = (prefix, botName, ownerName) => {
        return `
 *〈 ${botName} 〉*

 *〈 INFO BOT 〉*

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

  *〈 18+ 〉*
   
   ➔ *${prefix}randomhentai*
   •  *Desc* : Envio de imagem Hentai aleatória
   
   ➔ *${prefix}nsfwtrap*
   • *Desc* : Envio de imagem aleatória de Trap NSFW (nsfw necessário)
   
   ➔ *${prefix}nsfwneko*
   • *Desc* : Envio de imagem NSFW Neko aleatória (nsfw necessário)
  
    *${ownerName}*,
   • *Developer © ${botName}` 
}
exports.adult = adult
