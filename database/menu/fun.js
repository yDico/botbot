const fun = (prefix, botName, ownerName) => {
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

  *〈 DIVERSÃO 〉*
   
   ➔ *${prefix}alay* <text>
   • *Desc* : Mudando Palavras em Alay
  
   ➔ *${prefix}bucin*
   • *Desc* : Envie um Escravo do Amor Aleatório
  
   ➔ *${prefix}trust*
   • *Desc* : Envie uma verdade aleatória
  
   ➔ *${prefix}dare*
   • *Desc* : Envie um desafio aleatório
  
   ➔ *${prefix}simi* <text>
   • *Desc* : Fale com Simi
  
   ➔ *${prefix}say* <text>
   • *Desc* : Dizendo:v

    *${ownerName}*,
   *Desenvolvedor © ${botName}`
}
exports.fun = fun
