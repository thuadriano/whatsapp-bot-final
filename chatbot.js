// leitor de qr code
const qrcode = require('qrcode-terminal');
const { Client, LocalAuth, Buttons, List, MessageMedia } = require('whatsapp-web.js'); // Mudança Buttons
const client = new Client({
    authStrategy: new LocalAuth()
});
// serviço de leitura do qr code
client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});
// apos isso ele diz que foi tudo certo
client.on('ready', () => {
    console.log('Tudo certo! WhatsApp conectado.');
});
// E inicializa tudo 
client.initialize();

const delay = ms => new Promise(res => setTimeout(res, ms)); // Função que usamos para criar o delay entre uma ação e outra

// Funil

client.on('message', async msg => {

    if (msg.body.match(/(mentoria|consultoria|investimentos)/i) && msg.from.endsWith('@c.us')) {

        const chat = await msg.getChat();

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        const contact = await msg.getContact(); //Pegando o contato
        const name = contact.pushname; //Pegando o nome do contato
        await client.sendMessage(msg.from,'Olá! '+ name.split(" ")[0] + '.\n\nSou o assistente virtual da CripThu Treinamentos. Como posso ajudá-lo hoje? Por favor, digite uma das opções abaixo:\n\n1 - Como funciona a consultoria\n2 - Cursos/Mentorias\n3 - Outro Assuntos'); //Primeira mensagem de texto
       
    
        
    }




    if (msg.body !== null && msg.body === '1' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();


        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'A consultoria de investimentos funciona de acordo com a sua demanda!\n\nE com isso eu te ajudo da melhor forma');

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Por exemplo, montagem de carteira, configuração de hardwallets, aulas de investimento particulares, dúvidas sobre corretoras, negociação sem KYC… e outros casos (esses sao alguns dos mais comuns)');

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'A consultoria funciona por hora, sendo a primeira hora fechada (valor integral) e posteriormente o valor é cobrado de acordo com a fração da hora em questão\n\nA hora de consuloria é R$300,00');

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, '👉 Importante ressaltar que consultoria não é curso!\n\nConsultoria eu irei ficar em uma vídeo conferência com você particular para solucionar seu problema diretamente, de forma individual e personalizada');
      
        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Me conta aí, qual a sua demanda? Escreva o mais detalhado e assim que possível responderei pessoalmente para agendarmos uma reunião!');

    }

    if (msg.body !== null && msg.body === '2' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();


        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, '*Atualmente não possuo Vagas Abetas para Cursos/Mentorias.*\n\nTodas as minhas operações e ensinamentos passo diariamente Ao Vivo no YouTube e Instagram!\n\nDe Segunda à Sexta às 11:30!');

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Veja mais detalhes nas minhas redes sociais:https://linklist.bio/cripthu');
    }

    if (msg.body !== null && msg.body === '3' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();


        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Me fale mais detalhes aqui por aqui, e assim que possível irei responder pessoalmente à sua dúvida!');


    }








});