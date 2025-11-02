<h1 align="center">
  <img alt="Logo" src="https://i.imgur.com/SYx06Gx.png" width="40%">
</h1>

## Indice

- [Sobre](#-sobre)
- [Tecnologias utilizadas](#-tecnologias-utilizadas)
- [Como baixar o projeto](#-como-baixar-o-projeto)
- [Preview do projeto](#-preview-do-projeto)
- [Funcionalidades](#-Funcionalidades)
- [Download](#-Download)

---

## 🤔 Sobre

Peça um Uber X, XL ou LUX, veja a distância total entre os dois locais e o quanto você tem que pagar.

---

## 📱 Preview do projeto

Segue alguns prints do projeto:

<div>
  <img style="margin: 5px" alt="login" src="https://i.imgur.com/sMw3qZb.png" width="235">
  <img style="margin: 5px" alt="register" src="https://i.imgur.com/rnHzdN9.png" width="237">
  <img style="margin: 5px" alt="dashboard" src="https://i.imgur.com/OwOGh4U.png" width="231">
</div>
<br>
Você pode ver o vídeo do projeto clicando <a href="https://www.linkedin.com/feed/update/urn:li:activity:7080930055383638016/">aqui!</a>

---

## 💻 Tecnologias utilizadas

O projeto foi feito utilizando das seguintes tecnologias

- React Native
- Redux Toolkit
- API Google Autocomplete
- React Navigation
- Tailwind CSS
- Functional Components
- React Hooks
- Expo

---

## 📦 Como baixar o projeto

```bash
  #clonar o repositorio
  $ git clone git@github.com:eliasef/uber-clone.git

  #entrar na pasta do projeto
  $ cd api-pokedex

  #instalar as dependencias
  $ yarn

  #Basta ler o codigo de barras que aparecerá, com isso o projeto deverá abrir
  $ expo start


```

---

## 💻 Funcionalidades

- Peça um UBER especificando local de partida e local de destino

- Visualize os dois locais no mapa, clicando sobre o endereço

- Veja a distância em km entre origem e destino

- Veja a distância em minutos ou horas para chegar no seu destino

- Veja o preço para cada tipo de Uber para sua viagem, alterando entre Uber X, XL ou LUX.

## ⬇ Download

Segue o link para download do APK (android)

🏗️ Link em construção...

## Instalação
Para instalar e executar o aplicativo, siga as etapas abaixo:

1. Clone este repositório em sua máquina local. Execute o comando `git clone https://github.com/mobilecosta/appreact.git`

2. Navegue até o diretório raiz do projeto. Execute o comando `cd app`

3. Execute o comando `npm install` para instalar as dependências.

4. Execute o comando `npx expo start` para iniciar o aplicativo.

## Build com EAS Build
O EAS Build é uma ferramenta que simplifica o processo de construção de aplicativos Expo usando a infraestrutura Expo Application Services (EAS). Aqui está um guia passo a passo usando EAS Build:

1. **Passo 1: Instalar o EAS CLI:**
   Certifique-se de ter o EAS CLI instalado globalmente. Se não tiver, você pode instalá-lo usando:

   ```bash
   npm install -g eas-cli
   ```
2. **Passo 2: Login no Expo:**
    Antes de começar, faça login na sua conta Expo usando:
    ```bash
    eas login
    ```

    Você deve fazer login com sua conta expo.

3. **Passo 3:** Apague esse campo do arquivo `app.json`
    ````json
    "extra": {
      // Esse trecho -->
      "eas": {
        "projectId": "9d4cd834-a962-430e-a43e-812dca8b1c3d"
      }
      // fim do trecho
    }
    ````

    O esperado é que fique assim:
    ````json
    {
      "expo": {
        "name": "Robsol",
        "slug": "RobsolApp",
        "version": "1.0.0",
        "orientation": "portrait",
        "icon": "./src/assets/icon.png",
        "userInterfaceStyle": "light",
        "splash": {
          "image": "./src/assets/splash.png",
          "resizeMode": "contain",
          "backgroundColor": "#ffffff"
        },
        "updates": {
          "fallbackToCacheTimeout": 0
        },
        "assetBundlePatterns": ["**/*"],
        "ios": {
          "supportsTablet": true,
          "bundleIdentifier": "n"
        },
        "android": {
          "adaptiveIcon": {
            "foregroundImage": "./src/assets/adaptive-icon.png",
            "backgroundColor": "#FFFFFF"
          },
          "package": "com.felipemayer.robsolapp"
        },
        "web": {
          "favicon": "./src/assets/favicon.png"
        },
        "extra": { /* sem nada aqui */}
      }
    }
    ````
  3. **Passo 4: Iniciar o Build:**
      Agora você está pronto para iniciar o build. Execute:
      ````bash
      eas build
      ````

      Após isso selecione **Android** e depois marque tudo como *Y*
  
  4. **Passo 5: Acompanhe o processo:** Acompanhe o processo dentro do dashboard do expo.

  5. **Passo 6:** Após o build o expo vai disponibilizar um link de download do APK no terminal. Se não encontrar entre no dasboard do expo e selecione o projeto e toque em *Download APK*
