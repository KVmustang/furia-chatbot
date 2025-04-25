# Arquitetura do Sistema - FURIA Chatbot

## Visão Geral

O FURIA Chatbot é uma aplicação web que utiliza uma arquitetura cliente-servidor para fornecer uma interface conversacional aos fãs da FURIA Esports. A comunicação entre o cliente e o servidor é realizada em tempo real através de WebSockets, permitindo uma experiência interativa e responsiva.

## Componentes Principais

### 1. Frontend (Cliente)

O frontend do FURIA Chatbot é construído com HTML, CSS e JavaScript, utilizando o framework Tailwind CSS para estilização. A interface do usuário é responsiva e adaptada para diferentes dispositivos, desde desktops até smartphones.

**Componentes do Frontend:**
- **Interface de Chat**: Exibe as mensagens trocadas entre o usuário e o chatbot
- **Campo de Entrada**: Permite ao usuário digitar suas perguntas
- **Sugestões de Perguntas**: Oferece sugestões de perguntas comuns para facilitar a interação
- **Indicador de Digitação**: Mostra quando o chatbot está "digitando" uma resposta

### 2. Backend (Servidor)

O backend do FURIA Chatbot é construído com Node.js e Express, fornecendo uma API RESTful e um servidor WebSocket para comunicação em tempo real.

**Componentes do Backend:**
- **Servidor Express**: Gerencia as requisições HTTP e serve os arquivos estáticos
- **Socket.io**: Implementa a comunicação bidirecional em tempo real entre cliente e servidor
- **Processador de Mensagens**: Analisa as mensagens do usuário e identifica suas intenções
- **Gerador de Respostas**: Gera respostas contextuais com base nas intenções identificadas

### 3. Armazenamento de Dados

O FURIA Chatbot utiliza um arquivo JSON estático para armazenar informações sobre a FURIA Esports, incluindo história, jogadores, conquistas e participações em torneios.

**Estrutura de Dados:**
- **História**: Informações sobre a fundação e evolução da FURIA
- **Jogadores**: Dados sobre jogadores atuais e históricos
- **Conquistas**: Registro de títulos e resultados importantes
- **Majors**: Histórico de participações em campeonatos mundiais
- **Outras Modalidades**: Informações sobre outras modalidades além do CS:GO/CS2

## Fluxo de Comunicação

1. O usuário digita uma pergunta na interface do chatbot
2. A mensagem é enviada para o servidor através do Socket.io
3. O servidor processa a mensagem e identifica a intenção do usuário
4. O servidor gera uma resposta com base na intenção identificada
5. A resposta é enviada de volta para o cliente através do Socket.io
6. A interface do usuário exibe a resposta do chatbot

## Processamento de Linguagem Natural Simplificado

O FURIA Chatbot utiliza um sistema simplificado de processamento de linguagem natural baseado em palavras-chave para identificar as intenções do usuário:

1. **Extração de Palavras-Chave**: A mensagem do usuário é analisada para identificar palavras-chave
2. **Mapeamento de Intenções**: As palavras-chave são mapeadas para intenções predefinidas
3. **Geração de Resposta**: Uma resposta é gerada com base na intenção identificada

## Diagrama de Arquitetura

```
+------------------+        WebSocket        +------------------+
|                  |<----------------------->|                  |
|    FRONTEND      |                         |     BACKEND      |
|                  |         HTTP            |                  |
|  (HTML/CSS/JS)   |<----------------------->|  (Node.js/Express)|
|                  |                         |                  |
+------------------+                         +--------+---------+
                                                     |
                                                     | Lê
                                                     v
                                            +------------------+
                                            |                  |
                                            |   DADOS JSON     |
                                            |                  |
                                            |  (furia-info.json)|
                                            |                  |
                                            +------------------+
```

## Considerações de Escalabilidade

Embora o protótipo atual utilize um arquivo JSON estático para armazenamento de dados, a arquitetura foi projetada para permitir futuras melhorias:

1. **Banco de Dados**: Substituição do JSON por um banco de dados NoSQL como MongoDB
2. **NLP Avançado**: Integração com serviços de processamento de linguagem natural mais sofisticados
3. **APIs Externas**: Conexão com APIs da FURIA para obter informações em tempo real
4. **Autenticação**: Adição de sistema de autenticação para personalização da experiência

Esta arquitetura modular permite que o sistema evolua gradualmente, mantendo a simplicidade do protótipo inicial enquanto possibilita expansões futuras.
