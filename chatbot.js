// Importações
const qrcode = require('qrcode-terminal');
const fs = require('fs');
const { Client, LocalAuth } = require('whatsapp-web.js');

// Cliente com configuração compatível com Render
const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: {
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    }
});

// Exibe o QR Code se necessário
client.on('qr', qr => {
    qrcode.generate(qr, { small: true });
});

// Salva a sessão quando autenticado
client.on('authenticated', (session) => {
    console.log('✅ Sessão autenticada! Salvando...');
});

// Conectado com sucesso
client.on('ready', () => {
    console.log('✅ WhatsApp conectado e pronto!');
});

// Inicializa o cliente
client.initialize();

// Delay simulado
const delay = ms => new Promise(res => setTimeout(res, ms));

// Funil de mensagens
client.on('message', async msg => {
    if (msg.body.match(/(mentoria|consultoria|investimentos)/i) && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();
        await delay(3000);
        await chat.sendStateTyping();
        await delay(3000);
        const contact = await msg.getContact();
        const name = contact.pushname;
        await client.sendMessage(msg.from, `Olá! ${name?.split(" ")[0] || ''}.\n\nSou o assistente virtual da CripThu Treinamentos. Como posso ajudá-lo hoje? Por favor, digite uma das opções abaixo:\n\n1 - Como funciona a consultoria\n2 - Cursos/Mentorias\n3 - Outro Assuntos`);
    }

    if (msg.body === '1' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();
        await delay(3000);
        await chat.sendStateTyping();
        await delay(3000);
        await client.sendMessage(msg.from, 'A consultoria de investimentos funciona de acordo com a sua demanda!\n\nE com isso eu te ajudo da melhor forma');
        await delay(3000);
        await chat.sendStateTyping();
        await delay(3000);
        await client.sendMessage(msg.from, 'Por exemplo, montagem de carteira, configuração de hardwallets, aulas de investimento particulares, dúvidas sobre corretoras, negociação sem KYC… e outros casos (esses são alguns dos mais comuns)');
        await delay(3000);
        await chat.sendStateTyping();
        await delay(3000);
        await client.sendMessage(msg.from, 'A consultoria funciona por hora, sendo a primeira hora fechada (valor integral) e posteriormente o valor é cobrado de acordo com a fração da hora em questão\n\nA hora de consultoria é R$300,00');
        await delay(3000);
        await chat.sendStateTyping();
        await delay(3000);
        await client.sendMessage(msg.from, '👉 Importante ressaltar que consultoria não é curso!\n\nConsultoria eu irei ficar em uma vídeo conferência com você particular para solucionar seu problema diretamente, de forma individual e personalizada');
        await delay(3000);
        await chat.sendStateTyping();
        await delay(3000);
        await client.sendMessage(msg.from, 'Me conta aí, qual a sua demanda? Escreva o mais detalhado e assim que possível responderei pessoalmente para agendarmos uma reunião!');
    }

    if (msg.body === '2' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();
        await delay(3000);
        await chat.sendStateTyping();
        await delay(3000);
        await client.sendMessage(msg.from, '*Atualmente não possuo Vagas Abertas para Cursos/Mentorias.*\n\nTodas as minhas operações e ensinamentos passo diariamente Ao Vivo no YouTube e Instagram!\n\nDe Segunda à Sexta às 11:30!');
        await delay(3000);
        await chat.sendStateTyping();
        await delay(3000);
        await client.sendMessage(msg.from, 'Veja mais detalhes nas minhas redes sociais: https://linklist.bio/cripthu');
    }

    if (msg.body === '3' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();
        await delay(3000);
        await chat.sendStateTyping();
        await delay(3000);
        await client.sendMessage(msg.from, 'Me fale mais detalhes aqui por aqui, e assim que possível irei responder pessoalmente à sua dúvida!');
    }
});
