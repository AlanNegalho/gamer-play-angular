# Gamer Play Angular 🎮

## Descrição
Gamer Play Angular é um projeto construído com Angular para uma loja virtual de jogos. Este repositório contém o código-fonte do frontend da aplicação.

## Dependências
Certifique-se de ter as seguintes dependências instaladas em sua máquina antes de usar o projeto:

- **Node.js e npm:** Node.js é uma plataforma para executar JavaScript no servidor. npm é o sistema de gerenciamento de pacotes do Node.js.
    ```bash
    # Instale o Node.js e o npm no Linux/Ubuntu
    sudo apt-get install software-properties-common
    curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
    sudo apt-get install nodejs
    ```

    Verifique se a instalação foi bem-sucedida com:
    ```bash
    node --version
    ```

- **Angular CLI:** Angular CLI é uma ferramenta de linha de comando que simplifica o desenvolvimento Angular.
    ```bash
    # Instale o Angular CLI
    npm install -g @angular/cli
    ```

    Verifique se a instalação foi bem-sucedida com:
    ```bash
    ng --version
    ```

- **json-server:** json-server é uma biblioteca para criar uma API REST fake rapidamente.
    ```bash
    # Instale o json-server
    npm install -g json-server
    ```

## Como Usar
1. Clone este repositório:
    ```bash
    git clone https://github.com/seu-usuario/gamer-play-angular.git
    ```

2. Instale as dependências do projeto:
    ```bash
    cd gamer-play-angular
    npm install
    ```

3. Inicie o servidor da API fake com json-server:
    ```bash
    json-server --watch dbgames.json
    ```

4. Em outro terminal, inicie o servidor de desenvolvimento Angular:
    ```bash
    ng serve
    ```

5. Abra seu navegador e acesse `http://localhost:4200/` para ver a aplicação em execução.

## Login
Para acessar a área de administração da aplicação, utilize as seguintes credenciais:
- **Usuário:** admin
- **Senha:** 1234

## Imagens de Produtos
As imagens dos produtos estão localizadas na pasta `assets/img`.

---
Em Desenvolvimento 🎮