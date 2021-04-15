const group = (prefix, botName, ownerName) => {
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

  *〈 GROUP 〉*
   
   ➔ *${prefix}opengc*
   • *Desc* : Abre o grupo para membros
   
   ➔ *${prefix}closegc*
   • *Desc* : Fecha o grupo para membros  
   
   ➔ *${prefix}promote* <@tag>
   • *Desc* : Promove _membro_ para _admin_
   
   ➔ *${prefix}demote* <@tag>
   • *Desc* : Rebaixa cargo de um ADM (menos o dono)
   
   ➔ *${prefix}tagall*
   • *Desc* : menciona todos os integrantes do grupo
   
   ➔ *${prefix}tagall2*
   • *Desc* : menciona todos os integrantes do grupo
   
   ➔ *${prefix}tagall3*
   • *Desc* : menciona todos os integrantes do grupo
   
   ➔ *${prefix}tagall4*
   • *Desc* : menciona todos os integrantes do grupo
   
   ➔ *${prefix}tagall5*
   • *Desc* : menciona todos os integrantes do grupo
   
   ➔ *${prefix}add* <12542123926>
   • *Desc* : adiciona membros ao grupo
   
   ➔ *${prefix}kick* <@tag>
   • *Desc* : Banir membro do grupo (recomendo banir no máximo 2 por vez)
   
   ➔ *${prefix}listadmins*
   • *Desc* : Mostrar Administradores de Grupo de Lista
   
   ➔ *${prefix}linkgroup*
   • *Desc* : Mostrar link do grupo
   
   ➔ *${prefix}leave*
   • *Desc* : Diga ao bot para sair do grupo
   
   ➔ *${prefix}welcome* <1/0>
   • *Desc* : Ativando / desativando o recurso de boas-vindas
   
   ➔ *${prefix}nsfw* <1/0>
   • *Desc* : Ativando / Desativando o Recurso NSFW
   
   ➔ *${prefix}delete*
   • *Desc* : Excluir mensagem de bot
   
   ➔ *${prefix}simih* <1/0>
   • *Desc* : Ativando / desativando o recurso Simih 
   
   ➔ *${prefix}tagme*
   • *Desc* : Mencionar você mesmo
   
   ➔ *${prefix}ownergroup*
   • *Desc* : Mostra quem é o proprietário do grupo
   
   ➔ *${prefix}antilinkgroup* <1/0>
   • *Desc* : Ativando / Desativando o Recurso Anti Badword
   
   ➔ *${prefix}antibadwordgroup* <enable/disable>
   • *Desc* : Ativando / Desativando o Recurso Anti-Link
   
   ➔ *${prefix}listbadword*
   • *Desc* : Mostrar uma lista de palavrões

    *${ownerName}*,
   *Desenvolvedor © ${botName}`
}
exports.group = group
