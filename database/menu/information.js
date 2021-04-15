const information = (prefix, botName, ownerName) => {
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

  *〈 INFORMATION 〉*
   
   ➔ *${prefix}bahasa*
   •  *Desc* : Submit Language Code
   
   ➔ *${prefix}kodenegara*
   •  *Desc* : Send Country Code
   
   ➔ *${prefix}kbbi* <question>
   •  *Desc* : Asking KBBI
   
   ➔ *${prefix}fakta*
   •  *Desc* : Send a Random Fact
   
   ➔ *${prefix}infocuaca* <area>
   •  *Desc* : Send Weather Information
   
   ➔ *${prefix}infogempa*
   •  *Desc* : Sending Earthquake Information
   
   ➔ *${prefix}covidcountry* <country>
   •  *Desc* : Sending Covid-19 Information
   
    *${ownerName}*,
   *Desenvolvedor © ${botName}`
}
exports.information = information
