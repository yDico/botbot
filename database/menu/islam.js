const islam = (prefix, botName, ownerName) => {
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

   *〈 ISLAMISMO 〉*
   
   ➔ *${prefix}quran*
   • *Desc* : Versos do alcorão qending aleatoriamente
   
   ➔ *${prefix}jsholat* <area>
   • *Desc* : Enviando informações de programação de oração

      *${ownerName}*,
   *Desenvolvedor © ${botName}`
}
exports.islam = islam
