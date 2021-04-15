const education = (prefix, botName, ownerName) => {
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

  *〈 EDUCAÇÃO 〉*
   
   ➔ *${prefix}wiki* <query>
   • *Desc* : Pesquisa de acordo com a Wikipedia [indo]
   
   ➔ *${prefix}wikien* <query>
   • *Desc* : Pesquisa de acordo com a Wikipedia [inglês]
   
   ➔ *${prefix}nulis* <text>
   • *Desc* : Escreva um texto no livro
   
   ➔ *${prefix}quotes*
   • *Desc* : Envie uma citação aleatória
   
   ➔ *${prefix}quotes2*
   • *Desc* : Envie uma citação aleatória²
   
   ➔ *${prefix}tafsirmimpi* <dream>
   • *Desc* : Envie uma interpretação do sonho
   
   ➔ *${prefix}translate* <language_code>|<text>
   • *Desc* : Traduzindo uma palavra
   
   ➔ *${prefix}artinama* <name>
   • *Desc* : Interpretar nomes

    *${ownerName}*,
   *Desenvolvedor © ${botName}`
}
exports.education = education
