const limit = (prefix, botName, ownerName) => {
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

   *〈 Limite 〉*
   
  ➔ *${prefix}limit*
   • *Desc* : Verifique o seu limite
   
  ➔ *${prefix}bal*
   • *Desc* : Verifique o seu dinheiro
   
  ➔ *${prefix}buylimit* <count>
   • *Desc* : Limite de compra

      *${ownerName}*,
  ➔ *Desenvolvedor © ${botName}
--------------------------------
Nota: Você pode comprar um limite coletando dinheiro primeiro. Verifique seu dinheiro digitando o comando *${prefix}bal* , preço limite = 1000 dinheiro.
Nota2: Você pode coletar dinheiro conversando com seus amigos do grupo ou subindo de nível.`
}
exports.limit = limit