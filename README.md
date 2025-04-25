# README.md - FURIA Chatbot

![FURIA Logo](public/assets/images/furia-logo.png)

## Sobre o Projeto

O FURIA Chatbot é uma interface conversacional desenvolvida para fãs do time de CS da FURIA Esports. Este projeto permite que os fãs interajam com um chatbot que fornece informações sobre a história da organização, jogadores atuais e históricos, conquistas, participações em Majors e muito mais.

## Funcionalidades

- Interface de chat interativa com design inspirado nas cores da FURIA
- Respostas em tempo real usando Socket.io
- Informações detalhadas sobre a FURIA Esports
- Sugestões de perguntas para facilitar a interação
- Indicador de digitação para melhor experiência do usuário
- Design responsivo para desktop e dispositivos móveis

## Tecnologias Utilizadas

### Backend
- Node.js
- Express
- Socket.io

### Frontend
- HTML/CSS/JavaScript
- Tailwind CSS

### Armazenamento de Dados
- JSON estático

## Como Executar o Projeto

### Pré-requisitos
- Node.js (versão 14 ou superior)
- npm (gerenciador de pacotes do Node.js)

### Instalação

1. Clone o repositório
```bash
git clone https://github.com/seu-usuario/furia-chatbot.git
cd furia-chatbot
```

2. Instale as dependências
```bash
npm install
```

3. Inicie o servidor
```bash
npm run dev
```

4. Acesse o chatbot no navegador
```
http://localhost:3000
```

## Estrutura do Projeto

```
furia-chatbot/
├── public/                  # Arquivos estáticos
│   ├── index.html           # Página principal do chatbot
│   └── assets/
│       └── images/          # Imagens utilizadas no projeto
│           └── furia-logo.png
├── src/                     # Código fonte
│   ├── components/          # Componentes Vue (se aplicável)
│   └── data/                # Dados estáticos
│       └── furia-info.json  # Informações sobre a FURIA
├── server/                  # Código do servidor
│   └── index.js             # Servidor Express e lógica do chatbot
├── docs/                    # Documentação
│   ├── furia_info.md        # Informações coletadas sobre a FURIA
│   └── tecnologias/         # Documentação sobre tecnologias
├── package.json             # Dependências e scripts
└── README.md                # Documentação principal
```

## Implantação

O projeto pode ser facilmente implantado em plataformas como Vercel, Netlify ou Heroku. Para implantar no Vercel:

1. Crie uma conta no [Vercel](https://vercel.com/)
2. Instale a CLI do Vercel
```bash
npm install -g vercel
```

3. Faça login e implante o projeto
```bash
vercel login
vercel
```

## Possíveis Melhorias Futuras

- Implementação de um sistema de processamento de linguagem natural mais avançado
- Integração com APIs da FURIA para obter informações em tempo real
- Adição de mais modalidades e informações sobre outros times da FURIA
- Sistema de autenticação para personalizar a experiência do usuário
- Integração com redes sociais para compartilhamento de conteúdo

## Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo LICENSE para mais detalhes.

## Autor

Desenvolvido como parte de um desafio técnico para o processo seletivo de estágio em engenharia de software na FURIA Esports.
