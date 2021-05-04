const ownerNumber = ["557998295668@s.whatsapp.net"] 
// mude somente o numero e não tire o @s.whatsapp.net

const OriginalOwner = '557998295668' 
// mude para seu numero

const gimagenotregister = true
// quando não há comando registrado o bot procura no google image

const sgooglenotregister = true
// quando não há comando registrado o bot procura uma pesquisa no google

const msgwelcomeimg = (numero, groupname) => {
    return `Seja bem-vindo ao grupo`
}
//Texto de boas vindas na imagem quando welcome esta ativado
//Obs: não coloque o texto longo para a imagem não sumir

const byemsgimg = (numero, groupname) => {
    return `SAIU E NEM MAMOU OS ADMS AFF${numero}`
}
//Texto de despedidas na imagem quando welcome esta ativado
//Obs: não coloque o texto longo para a imagem não sumir

const menumsgimg = (numero, groupname) => {
    return `Seja bem-vindo ao menu do bot aproveite`
}
//Texto no menu da imagem quando welcome esta ativado
//Obs: não coloque o texto longo para a imagem não sumir

const apikeyimgbb = '1eb4ea79f7e4eef8241d5bdb054adc01'
// sua key do imgbb para ativar o antiporn e mais alguns comando que necessita de baixar imagem

const cr = '⏤͟͟͞▷𠫓𥸮𝑅𝐸𝑌𝑍𝐼𝑁𝐻𝑂 𝐷𝑂 𝐻𝑌𝑃𝐸𥸮𠫓\n' 
// texto do simbolo de verificado

const prefix = '!','/' 
// prefixo

const blockedmsg = '*Seu número foi bloqueado por spam(flood), Só o 𠫓𝑅𝐸𝑌𝑍𝐼𝑁𝐻𝑂 𝐷𝑂 𝐻𝑌𝑃𝐸𠫓 pode tirar seu ban*'
// mensagem quando alguem bloqueado solicita um comando

const blockedcmdmsg = '*Este comando só pode ser usado pelo 𠫓𝑅𝐸𝑌𝑍𝐼𝑁𝐻𝑂 𝐷𝑂 𝐻𝑌𝑃𝐸𠫓*'
// mensagem quando alguem solicita um comando bloqueado 

// MENSAGENS DE BAN

const banmsgtype = '*VALEU OTÁRIO SEGURA ESSE BAN AÍ*'
// mensagem de ban no anti tipos de mensagem

const adminmsgtype = '*NÃO MANDA ISSO PORRA'
// mensagem de quando adm manda tipos de mensagens proibidas

const banmsgporn = '*PROIBIDO PORNÔ ❌❌* VAI BATER PUNHETA EM OUTRA LUGAR'
// mensagem de ban no antiporn

const adminmsgporn = '*PROIBIDO PORNÔ ❌❌* Ahh mais tú e ADM blz blz próxima vez perde o ADM'
// mensagem de quando adm manda porn com antiporn ativado

const banmsglink = 'KKKKKKK MANDOU LINK SE FUDEU BAN OTÁRIO'
// mensagem de ban no antilink

const adminmsglink = '*PROIBIDO LINK ❌❌* Ah tú e ADM tranquilo'
// mensagem de quando adm manda link

const adminmsgpalavra = '*PALAVRA PROIBIDA ❌❌* Ah mais tú e ADM está de boa'
// mensagem de quando adm manda uma palavra proibida pelo bot

const banmsgpalavra = 'HUMM JÁ SABE NÉ? *PALAVRA PROIBIDA ❌❌*'
// mensagem de ban quando manda uma palavra proibida pelo bot

const qnttravahardroleta = 0
// quantidade de travas que mandam no roleta russa hard
// Obs: O valor é multiplicado por 12 ent tenha cuidado

// MENSAGENS DE BOM DIA BOA TARDE E BOA NOITE

const linkimgday = 'https://i.imgur.com/RR18JiI.jpg'
const textmsgday = 'Ohayo gozaimasu, Onii-chan 👉👈'
// link e mensagem de bom dia

const linkimgeve = 'https://i.ibb.co/bLXgcBW/lp-tarde-anime-by-hitsukinyan-db7fpqr-fullview.jpg'
const textmsgeve = `Kon'nichiwa Onii-chan, aceite esse café ☕`
// link e mensagem de boa tarde

const linkimgnig = 'https://i.ibb.co/VJCd34F/EKvo372-X0-AEd-Hz.jpg'
const textmsgnig = 'Konbanwa Onii-chan, espero que tenha tido um bom dia ☺️'
// link e mensagem de boa noite 

// MENSAGENS DE ERRO

const msgerr = 'Ixiii deu erro tente novamente. Dúvidas ${prefix}help'
// mensagem de erro

const notregister = `*Esse comando não existe no meu menu de comandos ou você escreveu errado. Tente ${prefix}menu para vê meus comandos, leia om atenção*`

// MENSAGENS DE AUTOREPLY

const botlindo = 'Ain vindo de você é um grande elogio 👉🏽👈🏽😳'
const linkbotlindo = 'https://photos1.iorbix.com/00/00/00/00/02/72/43/64/C--6tZwaASQH-b.jpg'
const botfeio = 'KKKKKKK TA MIM ACHANDO COM CARA DE SEU PAI É?'
const cadebot = 'OLHA EU AQUI FDP'
const botfdp = 'FDP e você seu lixo, eu deitar você na porrada enquanto você coça o cú você vai ver'
const botgostoso = 'Sou mesmo otário'
const botfofo = 'Uiui chupa meu pau'
const botbaianor = 'KKKKKKK MIM DA UMA REDE? 👉🏽👈🏽😳'
const botcorno = 'SAI DAQUI JOGADOR DE FOGAREL GRATUITO, KKKKKKK COMPRA PECKZINHO DE E-GRILO'
const botputa = 'KKKKKKK TA VENDO SUA MÃE AQUI???'
const botgay = 'KKKKKK Ala acha que sou espelho 🤣🤣🤣🤣🤣🤣'
const botviado = 'Ala o traveco de 2 reais 🤣🤣🤣'
const numbotfeio = 'Sou teu irmão fdp 🤣🤣🤣🤣'
// KEYS

// MENSAGENS DE EXCLUSIVIDADE
let mess = {
    wait: '⌛ ESPERA AI ESTOU FAZENDO✋🏽🐊⌛',
    success: '✔️ SUCESSO MEU PEIXE ✔️',
    error: {
        stick: '❌ DEU ERRO, TENTE NOVAMENTE. SE NÃO FUNCIONAR DESISTA! ❌',
        Iv: '❌ Link inválido ❌'
    },
    only: {
        group: '❌ ISSO É UM GRUPO? NÃO NÉ PORRA ❌',
        ownerG: '❌ SÓ PODE USAR NO GRUPO PROPRIETÁRIO ❌',
        ownerB: '❌ SÓ 𠫓𝑅𝐸𝑌𝑍𝐼𝑁𝐻𝑂 𝐷𝑂 𝐻𝑌𝑃𝐸𠫓 ❌',
        admin: '❌ CALA BOCA OTÁRIO SÓ ADM PODE USAR ESSE COMANDO ❌',
        Badmin: '❌ Esse comando só é liberado quando eu virar ADM ❌'
    }
}

// CONTATO DO CRIADOR

const vcard = 'BEGIN:VCARD\n' 
+ 'VERSION:3.0\n' 
+ 'FN:𠫓𝑅𝐸𝑌𝑍𝐼𝑁𝐻𝑂 𝐷𝑂 𝐻𝑌𝑃𝐸𠫓\n' 
+ 'ORG:Ian;\n' 
+ 'TEL;type=CELL;type=VOICE;waid=557998295668:+55 79 9829-5668\n' 
+ 'END:VCARD'
//vcard do propietário, mude os numeros de acordo com o formato que
//ele corresponde


// Nem ouse mexer aqui se n quiser que de erro
exports.menumsgimg = menumsgimg
exports.gimagenotregister = gimagenotregister
exports.sgooglenotregister = sgooglenotregister
exports.byemsgimg = byemsgimg
exports.msgwelcomeimg = msgwelcomeimg
exports.notregister = notregister
exports.qnttravahardroleta = qnttravahardroleta
exports.blockedcmdmsg = blockedcmdmsg
exports.blockedmsg = blockedmsg
exports.banmsgpalavra = banmsgpalavra
exports.adminmsgpalavra = adminmsgpalavra
exports.apikeyimgbb = apikeyimgbb
exports.linkbotlindo = linkbotlindo
exports.botlindo = botlindo
exports.botfeio = botfeio
exports.cadebot = cadebot
exports.botfdp = botfdp
exports.botgostoso = botgostoso
exports.botfofo = botfofo
exports.botbaianor = botbaianor
exports.botcorno = botcorno
exports.botputa = botputa
exports.botgay = botgay
exports.botviado = botviado
exports.numbotfeio = numbotfeio
exports.linkimgday = linkimgday
exports.textmsgday = textmsgday
exports.textmsgnig = textmsgnig
exports.linkimgnig = linkimgnig
exports.textmsgeve = textmsgeve
exports.linkimgeve = linkimgeve
exports.adminmsgtype = adminmsgtype
exports.adminmsgporn = adminmsgporn
exports.adminmsglink = adminmsglink
exports.banmsglink = banmsglink
exports.banmsgporn = banmsgporn
exports.banmsgtype = banmsgtype
exports.msgerr = msgerr
exports.mess = mess
exports.prefix = prefix
exports.cr = cr
exports.vcard = vcard
exports.OriginalOwner = OriginalOwner
exports.ownerNumber = ownerNumber