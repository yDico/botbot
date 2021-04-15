const textoaker = (prefix, botName, ownerName) => {
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

  *〈 IMAGE MAKER 〉*
   
    
    ➔ *${prefix}bpink* <text>
     • *Desc* :  Cria imagem de texto rosa/preta
   
    ➔ *${prefix}snowwrite* <text|text>
     • *Desc* :  Cria texto sob neve
   
    ➔ *${prefix}3dtext* <text>
     • *Desc* :  Cria imagem de texto 3d
   
    ➔ *${prefix}firetext* <text>
     • *Desc* : Cria texto sob fogo
   
    ➔ *${prefix}glitch* <text|text>
     • *Desc* : Cria texto sob falha de texto
   
    ➔ *${prefix}shadow* <text>
     • *Desc* : Cria texto sob sombra
   
    ➔ *${prefix}burnpaper* <text>
     • *Desc* : Cria texto sob papel
   
    ➔ *${prefix}coffee* <text>
     • *Desc* : Cria texto sob imagem de café
   
    ➔ *${prefix}lovepaper* <text>
     • *Desc* : Cria texto sob coração de papel
   
    ➔ *${prefix}woodblock* <text>
     • *Desc* :Cria texto sob de Bloco de Madeira
   
    ➔ *${prefix}qowheart* <text>
     • *Desc* : Cria texto sob corações de madeira
   
    ➔ *${prefix}mutgrass* <text>
     • *Desc* : Cria texto sob a imagem de grama
   
    ➔ *${prefix}undergocean* <text>
     • *Desc* : Cria texto sob Oceano Subterrâneo
   
    ➔ *${prefix}woodenboards* <text>
     • *Desc* : Cria texto sob pranchas de madeira 
   
    ➔ *${prefix}wolfmetal* <text>
     • *Desc* : Cria texto sob imagem Wolf Metal
   
    ➔ *${prefix}metalictglow* <text>
     • *Desc* : Cria texto sob imagem metálica brilhante
   
    ➔ *${prefix}8bit* <text|text>
     • *Desc* : Cria texto em imagem de 8 bits
   
    ➔ *${prefix}herrypotter* <text>
     • *Desc* : Cria texto sob imagem Herry Potter

    *${ownerName}*,
   *Desenvolvedor © ${botName}`
}
exports.textoaker = textoaker
