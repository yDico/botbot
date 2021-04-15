const wibu = (prefix, botName, ownerName) => {
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

 *〈 WEEBOO 〉*
   
   ➜ *${prefix}neonime*
    *Desc* : Procurar Neonime
   
   ➜ *${prefix}pokemon*
    *Desc* : Imagem aleatória de Pokémon

   ➜ *${prefix}loli*
    *Desc* : Imagem aleatória de Loli Image
   
   ➜ *${prefix}waifu*
    *Desc* : Imagem aleatória de Waifu
   
   ➜ *${prefix}randomanime*
    *Desc* : Imagem aleatória de Anime
   
   ➜ *${prefix}husbu*
    *Desc* : Imagem aleatória de HusbU
   
   ➜ *${prefix}husbu2*
    *Desc* : Imagem aleatória de Husbu2
   
   ➜ *${prefix}wait*
    *Desc* : Enviar nome do anime e cena curta
   
   ➜ *${prefix}nekonime*
    *Desc* : Imagem aleatória de Nekonime
    
   *${ownerName}*,
   *Desenvolvedor © ${botName}`
}
exports.wibu = wibu
