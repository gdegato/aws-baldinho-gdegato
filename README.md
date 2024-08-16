# Baldinho G de Gato

Este conteúdo foi desenvolvido para aplicar o conhecimento da certificação AWS Cloud Practitioner em uma funcionalidade útil para desenvolvimento frontend usando ReactJS.  
[Certificação AWS Cloud Practitioner](https://www.credly.com/badges/7789e947-45fe-405b-90f5-3789a8be48f4)

## Descrição da Aplicação

"Baldinho G de Gato" é uma aplicação desenvolvida em ReactJS para realizar o upload de arquivos diretamente para um bucket da AWS S3. Ao clicar no botão de envio, o arquivo é carregado para o bucket configurado, utilizando as credenciais fornecidas nas variáveis de ambiente.

## Funcionalidades

- Upload de arquivos para um bucket S3 configurado.
- Configuração por meio de variáveis de ambiente: `API_KEY`, `SECRET_KEY`, `AWS_REGION`, `Bucket` e `ACL`.

## Passo-a-Passo para Instalação

1. Clone o repositório da aplicação:
    ```bash
    git clone https://github.com/seu-usuario/baldinho-g-de-gato.git
    cd baldinho-g-de-gato
    ```

2. Instale as dependências necessárias:
    ```bash
    npm install
    ```

3. Certifique-se de ter instalado as seguintes bibliotecas:
    - [Create React App](https://reactjs.org/docs/create-a-new-react-app.html#create-react-app)
    - [AWS SDK](https://www.npmjs.com/package/aws-sdk)
    - [Material-UI](https://mui.com/)

4. Configure as variáveis de ambiente no arquivo `.env` localizado na raiz do projeto:
    ```plaintext
    REACT_APP_API_KEY=YOURAPIKEY
    REACT_APP_SECRET_KEY=YOURSECRETKEY
    REACT_APP_AWS_REGION=YOURAWSREGION
    ```

5. Na pasta `.aws`, crie uma subpasta chamada `credentials` contendo um arquivo `.ini` com o seguinte conteúdo:
    ```ini
    [default]
    aws_access_key_id = YOURACCESSKEY
    aws_secret_access_key = YOURSECRETACCESSKEY
    ```

6. Execute a aplicação:
    ```bash
    npm start
    ```

## Personalização

- Ao clonar a aplicação, lembre-se de customizar os valores das variáveis de ambiente `API_KEY`, `SECRET_KEY`, `AWS_REGION` e `Bucket` conforme as suas credenciais e configurações da AWS.

## Demonstração

![Image](https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ2RjdWQ4NTJ2Nmowd2kyamI1NjNudW9md3NjbWRzdzBnd3IxYjRveSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Dcpq32rVCOttrjKUn5/giphy.gif)

[Veja a aplicação em funcionamento no YouTube](https://www.youtube.com/watch?v=0dYEzEmPgUQ)
