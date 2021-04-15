const logomaker = (prefix, botName, ownerName) => {
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
 
    *〈 LOGOTIPO 〉*
   
   ➔ *${prefix}ninjalogo* <text|text>
   • *Desc* : fazer logotipo estilo ninja
   
   ➔ *${prefix}logowolf* <text|text>
   • *Desc* : fazer logotipo estilo Lobo 
   
   ➔ *${prefix}logowolf2* <text|text>
   • *Desc* : fazer logotipo estilo Lobo 2
   
   ➔ *${prefix}phlogo* <text|text>
   • *Desc* : fazer logotipo estilo PornHub 
   
   ➔ *${prefix}neonlogo* <text>
   • *Desc* : fazer logotipo estilo Néon
   
   ➔ *${prefix}neonlogo2* <text>
   • *Desc* : fazer logotipo estilo Néon 2
   
   ➔ *${prefix}lionlogo* <text|text>
   • *Desc* : fazer logotipo estilo Leão
   
   ➔ *${prefix}jokerlogo* <text>
   • *Desc* : fazer logotipo estilo palhaço 
   
   ➔ *${prefix}pubglogo* <text|text>
   • *Desc* : fazer logotipo estilo PUBG 
   
  *${ownerName}*,
   *Desenvolvedor © ${botName}`
}
exports.logomaker = logomaker
