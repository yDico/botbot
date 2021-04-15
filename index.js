const lolcatjs = require('lolcatjs')
const figlet = require('figlet')

lolcatjs.options.seed = Math.round(Math.random() * 1000);
lolcatjs.options.colors = true;

lolcatjs.fromString('[INFO] Se meu script estiver com erro, por favor, informe isso para mim')
lolcatjs.fromString('[SYSTEM] Iniciando bot...')
console.log('――――――――――――――――――――――――――――――――――――――――――――――――――――')
let { spawn } = require('child_process')
let path = require('path')
const CFonts  = require('cfonts')
CFonts.say('Dico Robotaim', {
  font: 'chrome',
  align: 'center',
  gradient: ['magenta', 'red']
})
CFonts.say('\'Dico-Robotaim\' By @DicoSz', {
  font: 'console',
  align: 'center',
  gradient: ['red' , 'magenta']
})
console.log('――――――――――――――――――――――――――――――――――――――――――――――――――――')

function start() {
  let args = [path.join(__dirname, 'nzwa.js'), ...process.argv.slice(2)]
  CFonts.say([process.argv[0], ...args].join(' '), {
    font: 'console',
    align: 'center',
    gradient: ['black', 'black']
  })
  let p = spawn(process.argv[0], args, {
    stdio: ['inherit', 'inherit', 'inherit', 'ipc']
  })
  .on('message', data => {
    if (data == 'reset') {
      console.log('RESET')
      p.kill()
      start()
      delete p
    }
  })
}

start()
console.log('――――――――――――――――――――――――――――――――――――――――――――――――――――')
lolcatjs.fromString('[DEV] DicoSz instagram: @Fernando.fch')
