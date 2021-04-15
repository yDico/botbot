const xp = (prefix, botName, ownerName) => {
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

    *〈 LEVEL 〉*
  
    ➔ *${prefix}level*
    *Desc* : Verifique o seu nível
   
    ➔ *${prefix}leveling* <1/0>
    *Desc* : Ativando / Desativando Recursos de Nivelamento
   
    ➔ *${prefix}mining*
    *Desc* : Minerar XP
   
    ➔ *${prefix}event* <1/0>
    *Desc* : Habilitando / desabilitando recursos de eventos
    
    *${ownerName}*,
    *Developer © ${botName}
--------------------------------
Note:Você pode coletar XP e aumentar seu nível conversando com qualquer pessoa do grupo que tenha ativado o recurso de nivelamento.`
}
exports.xp = xp