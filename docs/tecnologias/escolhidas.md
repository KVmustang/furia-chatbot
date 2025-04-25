# Tecnologias Escolhidas para o Chatbot da FURIA Esports

Após análise das opções disponíveis e considerando os requisitos do projeto, decidi utilizar as seguintes tecnologias para o desenvolvimento do chatbot da FURIA Esports:

## Backend
**Node.js + Express**

Justificativa:
- Desenvolvimento rápido e eficiente
- Excelente para aplicações em tempo real com Socket.io
- Grande comunidade e suporte
- Boa integração com serviços de hospedagem

## Frontend
**HTML/CSS/JavaScript com Vue.js**

Justificativa:
- Vue.js é intuitivo e tem curva de aprendizado menor
- Oferece componentização eficiente
- Permite criar uma interface interativa e responsiva
- Bom equilíbrio entre simplicidade e recursos avançados

## Armazenamento de Dados
**JSON estático**

Justificativa:
- Simplicidade ideal para um protótipo
- Não requer configuração de banco de dados
- Fácil de editar e manter
- Suficiente para armazenar informações sobre a FURIA e respostas do chatbot

## Hospedagem
**Vercel**

Justificativa:
- Implantação contínua a partir do GitHub
- Suporte a funções serverless
- Plano gratuito adequado para o protótipo
- Boa integração com Vue.js

## Bibliotecas Adicionais
- **Socket.io**: Para comunicação em tempo real
- **Tailwind CSS**: Para estilização rápida e responsiva
- **Vue Router**: Para navegação entre páginas (se necessário)
- **Axios**: Para requisições HTTP

## Estrutura do Projeto
```
furia-chatbot/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── assets/
│       └── images/
├── src/
│   ├── components/
│   │   ├── ChatBox.vue
│   │   ├── ChatMessage.vue
│   │   ├── ChatInput.vue
│   │   └── Header.vue
│   ├── data/
│   │   ├── furia-info.json
│   │   └── responses.json
│   ├── services/
│   │   └── chatService.js
│   ├── App.vue
│   └── main.js
├── server/
│   ├── index.js
│   └── chatbot.js
├── package.json
└── README.md
```

Esta combinação de tecnologias permitirá criar um chatbot funcional, interativo e informativo para os fãs da FURIA Esports, atendendo aos requisitos do desafio técnico.
