[Documentação Técnica RFC do projeto](https://docs.google.com/document/d/11Tobzwm5-JkiURC2DJRTKl8LARjj46NG/edit?usp=sharing&ouid=113156827946997430842&rtpof=true&sd=true)

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=WesleySardi_projeto-conclusao-curso-frontend&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=WesleySardi_projeto-conclusao-curso-frontend)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=WesleySardi_projeto-conclusao-curso-frontend&metric=bugs)](https://sonarcloud.io/summary/new_code?id=WesleySardi_projeto-conclusao-curso-frontend)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=WesleySardi_projeto-conclusao-curso-frontend&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=WesleySardi_projeto-conclusao-curso-frontend)
[![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=WesleySardi_projeto-conclusao-curso-frontend&metric=duplicated_lines_density)](https://sonarcloud.io/summary/new_code?id=WesleySardi_projeto-conclusao-curso-frontend)

# Página de Vendas

## Descrição do Projeto

Este projeto é uma página institucional e de vendas da pulseira **ZloTrackband**, uma pulseira de auxílio para pessoas dependentes. A página contém informações sobre o grupo Zlo, sobre as pulseiras e oferece um fluxo de compra da pulseira e download de um aplicativo para gestão de dependentes.

### Principais Funcionalidades:
- **Home:** Exibe informações sobre o grupo Zlo e a pulseira ZloTrackband.
- **Compra de Pulseiras:** Página para realizar a compra de pulseiras.
- **Download do Aplicativo:** Permite o download do aplicativo de gestão de dependentes.

## Visão Geral

### Introdução
A página foi desenvolvida utilizando **React.js**, com foco em interfaces responsivas e de alta performance, garantindo uma experiência de usuário aprimorada para visitantes e clientes.

### Tecnologias Utilizadas
- **React.js**: Framework JavaScript para construção da interface.
- **Styled Components**: Para estilização com CSS-in-JS.
- **Axios**: Para gerenciamento de requisições HTTP.
- **React Router**: Para navegação fluida entre páginas.
- **React Toastify**: Para exibição de notificações.
- **Font Awesome**: Para utilização de ícones.

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
- Home: Página principal com apresentação do grupo Zlo e as funcionalidades da pulseira.
- Compra: Interface para realizar a compra das pulseiras, integrada a serviços de pagamento.
- Download: Área para o usuário baixar o aplicativo complementar.

### Estilo e Componentização
O projeto utiliza Styled Components para criar componentes estilizados de forma modular e reutilizável, garantindo consistência visual em todas as páginas.

### Navegação e Roteamento
Com React Router, as páginas são conectadas de forma fluida, otimizando a navegação e mantendo a performance.

### Requisições HTTP
O Axios gerencia a comunicação com APIs externas, como serviços de pagamento e informações de produtos.

### Notificações
Utilizamos React Toastify para mensagens de feedback ao usuário, como confirmações de compra ou erros.

### Conclusão
Este projeto foi projetado para oferecer uma experiência de compra eficiente, informativa e intuitiva, representando o compromisso do grupo Zlo com a tecnologia acessível e funcional.

### Desenvolvedores
Wesley Erik Sardi

### Contribuições são bem-vindas! Para colaborar, abra uma issue ou envie um pull request.
