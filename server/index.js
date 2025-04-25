const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

// Carregar dados da FURIA
const furiaData = JSON.parse(fs.readFileSync(path.join(__dirname, '../src/data/furia-info.json'), 'utf8'));

// Palavras-chave para identificar intenções do usuário
const keywords = {
  historia: ['história', 'historia', 'fundação', 'fundacao', 'criação', 'criacao', 'origem', 'começo', 'comeco', 'início', 'inicio'],
  jogadores: ['jogadores', 'atletas', 'elenco', 'time', 'equipe', 'lineup', 'roster', 'jogador'],
  jogadores_historicos: ['antigos', 'históricos', 'historicos', 'ex-jogadores', 'ex jogadores', 'passado', 'anteriores'],
  conquistas: ['conquistas', 'títulos', 'titulos', 'campeonatos', 'torneios', 'vitórias', 'vitorias', 'troféus', 'trofeus'],
  majors: ['major', 'majors', 'mundial', 'mundiais', 'campeonato mundial'],
  proximos_jogos: ['próximos', 'proximos', 'jogos', 'partidas', 'agenda', 'calendário', 'calendario', 'quando'],
  redes_sociais: ['redes', 'sociais', 'instagram', 'twitter', 'facebook', 'youtube', 'twitch', 'seguir'],
  loja: ['loja', 'comprar', 'produtos', 'camiseta', 'camisa', 'merchandising', 'merch'],
  outras_modalidades: ['modalidades', 'outros jogos', 'outros games', 'além', 'alem', 'rocket', 'valorant', 'lol'],
  saudacoes: ['oi', 'olá', 'ola', 'e aí', 'e ai', 'eae', 'salve', 'fala', 'bom dia', 'boa tarde', 'boa noite']
};

// Respostas para cada intenção
const responses = {
  historia: () => {
    return `A FURIA Esports foi fundada em 8 de agosto de 2017 em Uberlândia, Minas Gerais, pelos empresários ${furiaData.historia.fundadores.join(', ')}. ${furiaData.historia.origem} ${furiaData.historia.crescimento}`;
  },
  
  jogadores: () => {
    const jogadores = furiaData.jogadores_atuais.cs2.map(j => `- ${j.nickname} (${j.nome_completo}) - ${j.funcao}`).join('\n');
    return `O elenco atual de CS2 da FURIA é composto por:\n${jogadores}\n\nA equipe é treinada por ${furiaData.jogadores_atuais.comissao_tecnica[0].nickname} (${furiaData.jogadores_atuais.comissao_tecnica[0].nome_completo}), com ${furiaData.jogadores_atuais.comissao_tecnica[1].nickname} (${furiaData.jogadores_atuais.comissao_tecnica[1].nome_completo}) como assistente.`;
  },
  
  jogadores_historicos: () => {
    const jogadores = furiaData.jogadores_historicos.map(j => `- ${j.nickname} (${j.nome_completo}) - ${j.periodo}: ${j.destaque}`).join('\n');
    return `Alguns jogadores históricos que passaram pela FURIA:\n${jogadores}`;
  },
  
  conquistas: () => {
    const conquistas = furiaData.conquistas.map(c => `- ${c.titulo} (${c.ano}): ${c.resultado} contra ${c.adversario}, premiação de ${c.premiacao}`).join('\n');
    return `Entre as principais conquistas da FURIA no CS:GO estão:\n${conquistas}`;
  },
  
  majors: () => {
    const historico = furiaData.majors.historico.map(m => `- ${m.nome}: ${m.resultado}`).join('\n');
    return `A FURIA tem ${furiaData.majors.participacoes} participações em Majors. ${furiaData.majors.destaque}\n\nSeu melhor resultado foi a ${furiaData.majors.melhor_resultado}.\n\nHistórico completo:\n${historico}`;
  },
  
  proximos_jogos: () => {
    return `Para informações atualizadas sobre os próximos jogos da FURIA, recomendo verificar o site oficial (furia.gg) ou seguir as redes sociais da equipe. Lá você encontrará o calendário completo de partidas e competições.`;
  },
  
  redes_sociais: () => {
    return `Você pode seguir a FURIA nas redes sociais:
    - Twitter/X: ${furiaData.redes_sociais.twitter}
    - Instagram: ${furiaData.redes_sociais.instagram}
    - Facebook: ${furiaData.redes_sociais.facebook}
    - YouTube: ${furiaData.redes_sociais.youtube}
    - Twitch: ${furiaData.redes_sociais.twitch}`;
  },
  
  loja: () => {
    return `Você pode adquirir produtos oficiais da FURIA na loja online oficial: ${furiaData.loja}. Lá você encontrará camisetas, moletons, bonés e outros itens com a marca da FURIA.`;
  },
  
  outras_modalidades: () => {
    return `Além do CS:GO/CS2, a FURIA também atua nas seguintes modalidades: ${furiaData.outras_modalidades.join(', ')}.`;
  },
  
  saudacoes: () => {
    return `Olá! Sou o chatbot da FURIA Esports. Como posso ajudar você hoje? Posso falar sobre a história da FURIA, jogadores, conquistas, participações em Majors e muito mais!`;
  },
  
  default: () => {
    return `Desculpe, não entendi sua pergunta. Posso falar sobre a história da FURIA, jogadores atuais e históricos, conquistas, participações em Majors, próximos jogos, redes sociais, outras modalidades ou loja oficial. Como posso ajudar?`;
  }
};

// Função para identificar a intenção do usuário
function identifyIntent(message) {
  message = message.toLowerCase();
  
  for (const intent in keywords) {
    for (const keyword of keywords[intent]) {
      if (message.includes(keyword)) {
        return intent;
      }
    }
  }
  
  return 'default';
}

// Função principal para processar mensagens
function processMessage(message) {
  const intent = identifyIntent(message);
  return responses[intent]();
}

// Configuração do servidor
const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
});

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

// Rotas
app.get('/api/info', (req, res) => {
  res.json({ message: 'API do Chatbot da FURIA Esports funcionando!' });
});

// Socket.io
io.on('connection', (socket) => {
  console.log('Novo usuário conectado:', socket.id);
  
  // Enviar mensagem de boas-vindas
  socket.emit('message', {
    user: 'bot',
    text: responses.saudacoes(),
    timestamp: new Date()
  });

  // Receber mensagens do cliente
  socket.on('message', (message) => {
    console.log('Mensagem recebida:', message);
    
    // Processar a mensagem e obter resposta do chatbot
    const response = processMessage(message.text);
    
    // Simular um pequeno atraso para parecer mais natural
    setTimeout(() => {
      // Enviar resposta para o cliente
      socket.emit('message', {
        user: 'bot',
        text: response,
        timestamp: new Date()
      });
    }, 500);
  });

  // Desconexão
  socket.on('disconnect', () => {
    console.log('Usuário desconectado:', socket.id);
  });
});

// Iniciar servidor
const PORT = process.env.PORT || 3000;
server.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

module.exports = {
  processMessage
};
