const owner = (prefix, botName, ownerName) => {
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

 *〈 PROPRIETÁRIO 〉*
   
   ➔ *${prefix}setprefix* <text/optional>
   • *Desc* : substitua o prefixo
   
   ➔ *${prefix}block* <@tag>
   • *Desc* : Bloquear usuário
   
   ➔ *${prefix}unblock* <@tag>
   • *Desc* : desbloquear usuário
   
   ➔ *${prefix}bc* <text>
   • *Desc* : transmitir para todos os contatos e grupos
   
   ➔ *${prefix}clone* <@tag>
   • *Desc* : Clone o perfil de outros membros em todo o chat
   
   ➔ *${prefix}clearall*
   • *Desc* : limpar todo o bate-papo
   
   ➔ *${prefix}addbadword* <text>
   • *Desc* : Adicionar texto de palavrão
   
   ➔ *${prefix}delbadword* <badwordtextlist>
   • *Desc* : Deletar texto de palavrão
   
    *${ownerName}*,
   *Desenvolvedor © ${botName}`
}
exports.owner = owner
