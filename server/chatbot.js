const furiaInfo = require('../data/furia-info.json');

// Palavras-chave para identificar intenções do usuário
const keywords = {
  historia: ['história', 'historia', 'fundação', 'fundacao', 'criação', 'criacao', 'origem', 'começo', 'comeco', 'início', 'inicio'],
  jogadores: ['jogadores', 'atletas', 'elenco', 'time', 'equipe', 'lineup', 'roster', 'jogador'],
  conquistas: ['conquistas', 'títulos', 'titulos', 'campeonatos', 'torneios', 'vitórias', 'vitorias', 'troféus', 'trofeus'],
  majors: ['major', 'majors', 'mundial', 'mundiais', 'campeonato mundial'],
  proximos_jogos: ['próximos', 'proximos', 'jogos', 'partidas', 'agenda', 'calendário', 'calendario', 'quando'],
  redes_sociais: ['redes', 'sociais', 'instagram', 'twitter', 'facebook', 'youtube', 'twitch', 'seguir'],
  loja: ['loja', 'comprar', 'produtos', 'camiseta', 'camisa', 'merchandising', 'merch'],
  saudacoes: ['oi', 'olá', 'ola', 'e aí', 'e ai', 'eae', 'salve', 'fala', 'bom dia', 'boa tarde', 'boa noite']
};

// Respostas padrão para cada intenção
const responses = {
  historia: () => {
    return `A FURIA Esports foi fundada em 8 de agosto de 2017 em Uberlândia, Minas Gerais, pelos empresários Jaime Pádua, André Akkari e Cris Guedes. A organização começou com foco no Counter-Strike: Global Offensive (CS:GO) e rapidamente se expandiu para outras modalidades. Hoje é uma das maiores organizações de esports do Brasil e reconhecida mundialmente.`;
  },
  
  jogadores: () => {
    return `O elenco atual de CS2 da FURIA é composto por: 
    - Yuri "yuurih" Santos
    - Kaike "KSCERATO" Cerato
    - Gabriel "FalleN" Toledo
    - Danil "molodoy" Golubenko
    - Felipe "skullz" Medeiros
    
    A equipe é treinada por Sid "sidde" Macedo, com Juan "Hepa" Borges como assistente.`;
  },
  
  conquistas: () => {
    return `Entre as principais conquistas da FURIA no CS:GO estão:
    - ESL Pro League Season 12 North America (2020)
    - DreamHack Masters Spring 2020: North America
    - Elisa Masters Espoo 2023
    - Vice-campeã da Esports Championship Series Season 7 Finals
    - Semifinalista do IEM Rio Major 2022`;
  },
  
  majors: () => {
    return `A FURIA é a única equipe brasileira a participar de todos os Majors desde 2019, totalizando sete participações consecutivas. Sua melhor campanha foi no IEM Rio Major 2022, onde chegou às semifinais jogando em casa com o apoio da torcida brasileira.`;
  },
  
  proximos_jogos: () => {
    return `Para informações atualizadas sobre os próximos jogos da FURIA, recomendo verificar o site oficial (furia.gg) ou seguir as redes sociais da equipe. Lá você encontrará o calendário completo de partidas e competições.`;
  },
  
  redes_sociais: () => {
    return `Você pode seguir a FURIA nas redes sociais:
    - Twitter/X: @FURIA
    - Instagram: @furiagg
    - Facebook: /furiagg
    - YouTube: FURIA
    - Twitch: furiatv`;
  },
  
  loja: () => {
    return `Você pode adquirir produtos oficiais da FURIA na loja online oficial: shop.furia.gg. Lá você encontrará camisetas, moletons, bonés e outros itens com a marca da FURIA.`;
  },
  
  saudacoes: () => {
    return `Olá! Sou o chatbot da FURIA Esports. Como posso ajudar você hoje? Posso falar sobre a história da FURIA, jogadores, conquistas, participações em Majors e muito mais!`;
  },
  
  default: () => {
    return `Desculpe, não entendi sua pergunta. Posso falar sobre a história da FURIA, jogadores atuais, conquistas, participações em Majors, próximos jogos, redes sociais ou loja oficial. Como posso ajudar?`;
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

module.exports = {
  processMessage
};
