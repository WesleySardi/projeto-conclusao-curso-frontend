# Página de Vendas

## Descrição do Projeto

Este projeto é uma página institucional e de vendas da pulseira **ZloTrackband**, um dispositivo inovador que visa proporcionar uma solução de auxílio para pessoas dependentes. A principal finalidade da página é oferecer aos usuários uma forma simples, prática e rápida de conhecer o grupo Zlo, adquirir a pulseira e fazer o download do aplicativo **ZloApp**, que auxilia no gerenciamento de dependentes. A página é construída com um foco claro em agilidade e praticidade, garantindo que pessoas de todas as idades possando comprar o produto de forma prática sem maiores problemas.

### Objetivos da Página

O objetivo principal da página é oferecer uma experiência ágil e eficiente para o usuário, permitindo que ele:

1. **Conheça o grupo Zlo:** A página fornece informações claras sobre o grupo Zlo, bem como sobre a pulseira **ZloTrackband**, entregando um fluxo claro para o usuário.
   
2. **Realize a compra de pulseiras:** O fluxo de compra da pulseira foi criado para ser simples e direto, com um processo de pagamento facilitado, tornando o processo de compra acessível para todos, incluindo pessoas de todas as idades. A página busca reduzir o número de etapas desnecessárias, garantindo que o usuário compre a pulseira de forma rápida e sem confusão.

3. **Faça o download do aplicativo ZloApp:** A página oferece links diretos para o download do aplicativo, garantindo que o usuário possa rapidamente baixar e instalar o aplicativo após a compra. O aplicativo é essencial para o gerenciamento das funcionalidades da pulseira ZloTrackband e para oferecer uma experiência integrada e completa.

Além disso, a página foi pensada para otimizar a experiência do usuário em dispositivos de diferentes tamanhos de tela (desktops, tablets e smartphones), garantindo que o site seja responsivo e tenha um design adaptável às necessidades de cada usuário.

### Melhoria Contínua e Objetivos Futuros

Estamos comprometidos com a evolução contínua da página e temos planos de implementação de melhorias substanciais. Os principais objetivos para o futuro incluem:

1. **Implementação de segurança aprimorada no processo de compra e download do aplicativo:**
   - **Criptografia de dados:** Implementação de técnicas de criptografia para garantir que os dados de pagamento e dados pessoais dos usuários sejam protegidos contra acessos não autorizados.
   - **Autenticação segura:** Implementação de autenticação forte (como autenticação de dois fatores) para proteger as contas de usuários que realizarem compras ou interagirem com o sistema de download do aplicativo.
   - **Conformidade com HYPPA e PHI:** A conformidade com as normas de proteção de dados da saúde (HYPPA - Health Insurance Portability and Accountability Act) e informações de saúde protegidas (PHI - Protected Health Information) será garantida, de modo a assegurar que todas as informações sensíveis dos usuários sejam tratadas com segurança e de acordo com as regulamentações internacionais.
   
2. **Implementação do registro de compras no banco de dados:**  
   - O sistema de registro de compras no banco de dados será implementado futuramente, permitindo que as transações de compra sejam armazenadas de maneira segura. Isso permitirá um acompanhamento mais eficiente das compras, gerenciando as informações de maneira adequada e conforme as exigências legais.
   
3. **Aprimoramento da responsividade:**  
   - Melhoria da experiência de navegação em diferentes dispositivos, com um design adaptativo que se ajusta a telas de diferentes tamanhos e resoluções. A ideia é proporcionar uma experiência consistente e sem falhas tanto em smartphones de diferentes tamanhos, como também em tablets e desktops.

### Tecnologias Utilizadas

O projeto foi desenvolvido com uma seleção cuidadosa de ferramentas e frameworks, com o objetivo de garantir uma performance otimizada e uma experiência de usuário agradável. As principais tecnologias utilizadas são:

- **React.js:** Framework JavaScript para a construção da interface, com foco em componentes reutilizáveis, estruturação de páginas dinâmicas e alta performance.
- **Styled Components:** Utilizado para estilização de componentes com CSS-in-JS, permitindo maior flexibilidade e escalabilidade no design.
- **Axios:** Biblioteca para gerenciamento de requisições HTTP, facilitando a comunicação com APIs externas para pagamentos e outros serviços.
- **React Router:** Usado para implementar o roteamento da aplicação, garantindo uma navegação fluida e sem recarregamento de página.
- **React Toastify:** Biblioteca de notificações para feedback instantâneo aos usuários, como confirmações de compra, alertas e erros.
- **Font Awesome:** Para incorporar ícones, tornando a interface mais interativa e fácil de navegar.

### Estrutura do Projeto

```bash
site-vendas/
├── src/
│   ├── components/        # Componentes reutilizáveis
│   ├── pages/             # Páginas do site
│   ├── services/          # Requisições HTTP
│   ├── styles/            # Estilos globais e temas
│   └── utils/             # Funções utilitárias
├── public/                # Arquivos públicos e estáticos
├── package.json           # Dependências do projeto
└── README.md              # Documentação do projeto
```

### Descrição das Páginas
- **Home:** Página principal com informações sobre o grupo Zlo e a pulseira ZloTrackband.
- **Compra:** Página para o processo de compra da pulseira, com integração a serviços de pagamento seguros. Essa página foi projetada para ser simples, sem etapas desnecessárias, garantindo uma compra rápida e sem complicações.
- **Download:** Página que permite ao usuário baixar o aplicativo ZloApp para Android, garantindo que o usuário tenha acesso imediato à plataforma de gestão dos dependentes após a realização da compra.

### Segurança e Conformidade

A segurança dos dados e a proteção da privacidade do usuário são aspectos fundamentais no projeto. Embora atualmente não tenhamos um sistema de registro de compras no banco de dados, futuros desenvolvimentos garantirão que a segurança e a conformidade com as leis de proteção de dados sejam rigorosamente atendidas. Isso inclui:

1. **Conformidade com a LGPD (Lei Geral de Proteção de Dados):** O projeto se compromete a implementar todas as práticas necessárias para garantir que os dados pessoais dos usuários sejam tratados conforme a LGPD, garantindo que informações como nome, endereço e detalhes de pagamento sejam protegidos adequadamente. O tratamento de dados será feito de forma transparente e de acordo com as permissões fornecidas pelos usuários.

2. **Proteção de Dados Sensíveis (HYPPA e PHI):** Considerando que o sistema pode lidar com dados de saúde relacionados aos dependentes, será adotada a conformidade com HYPPA e PHI, garantindo que as informações de saúde dos usuários sejam tratadas com os mais altos níveis de segurança.

3. **Criptografia de Dados:** A implementação de protocolos de segurança, como **SSL/TLS**, será aplicada para criptografar as transações de pagamento e quaisquer outros dados sensíveis trocados entre o usuário e o servidor.

4. **Autenticação e Controle de Acesso:** Implementação de autenticação segura, com possibilidade de autenticação de dois fatores (2FA) para garantir que somente usuários autorizados possam acessar áreas restritas, como o histórico de compras ou dados sensíveis.

### Estilo e Componentização
A abordagem de desenvolvimento com **Styled Components** facilita a criação de componentes modulares e reutilizáveis. Isso não só garante a consistência visual entre as páginas, mas também permite que qualquer alteração no design seja feita de maneira eficiente, sem a necessidade de mexer diretamente em vários arquivos de estilo. Além disso, a aplicação de temas e estilos globais facilita a manutenção e a expansão do projeto.

### Navegação e Roteamento
**React Router** é utilizado para criar uma navegação fluida e sem recarregamentos de página. Isso melhora a performance do site e garante uma experiência mais dinâmica para o usuário, sem interrupções durante o processo de navegação.

### Requisições HTTP
A biblioteca **Axios** facilita a integração com APIs externas, permitindo a comunicação eficiente com os sistemas de pagamento, serviços de verificação de estoque e outras funcionalidades do site.

### Notificações
O **React Toastify** é utilizado para exibir mensagens de feedback, como confirmações de compra e alertas de erro. Isso melhora a experiência do usuário, fornecendo respostas imediatas e claras às suas ações.

## Conclusão
Este projeto foi desenvolvido com o objetivo de proporcionar uma experiência de compra segura, eficiente e agradável para os usuários. A página foi projetada para ser acessível, intuitiva e fácil de usar, ao mesmo tempo em que garante que as informações sensíveis dos usuários sejam tratadas com total segurança e conformidade com as leis de proteção de dados.

### Desenvolvedores
- **Wesley Erik Sardi**

### Contribuições
Contribuições são bem-vindas! Para colaborar, basta abrir uma issue ou enviar um pull request.

## Links Úteis
- [Documentação Técnica RFC do projeto](https://docs.google.com/document/d/11Tobzwm5-JkiURC2DJRTKl8LARjj46NG/edit?usp=sharing&ouid=113156827946997430842&rtpof=true&sd=true)
- [SonarCloud: Quality Gate Status](https://sonarcloud.io/summary/new_code?id=WesleySardi_projeto-conclusao-curso-frontend)
- [SonarCloud: Bugs](https://sonarcloud.io/summary/new_code?id=WesleySardi_projeto-conclusao-curso-frontend)
- [SonarCloud: Code Smells](https://sonarcloud.io/summary/new_code?id=WesleySardi_projeto-conclusao-curso-frontend)
- [SonarCloud: Duplicated Lines](https://sonarcloud.io/summary/new_code?id=WesleySardi_projeto-conclusao-curso-frontend)
