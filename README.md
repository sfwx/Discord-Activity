🌙 **❯** ***Status de natividade/streaming personalizado.***

• Vocês podem fazer a instalação em um projeto **[NodeJS](https://replit.com/new/nodejs)** na **[Repl.It](https://replit.com)**, e então executar o comando a seguir no terminal/console/shell.
*Obs: para quem for usar replit ou outra host, lembre-se de adicionar* ***`express`*** *para que não pare com tanta frequência (pelo* ***[Termux](https://termux.com)*** *ele não será nescessário instalar pois ela utiliza o próprio celular como um host. Mais vai de sua escolha usar ou não o* ***[Termux](https://termux.com)****)*

> • Se você for um usuário **[Termux](https://termux.com)** é recomendado que utilize o codigo a seguir antes do comando de instalação.
```
pkg update && pkg upgrade && pkg i git nodejs
```

> • Comando principal de instalação dos recursos do sistema:
```
git clone https://github.com/TCDhub/Discord-Activity && mv Discord-Activity/index.js Discord-Activity/status.json Discord-Activity/events . && rm -r Discord-Activity && npm init -y && npm i discord.js discord.js-selfbot-v11 discordrpcgenerator
```
• Sempre que aparecer para substituir uma pasta/ou arquivo use ***`y`***. Após instalar os pacotes você deve ir em ***`status.json`*** para substituir as informações que deseja. Aproveite e desfrute do sistema. Obs: Caso você faça pela **[Repl.It](https://replit.com)** é nescessário que você delete manualmente a pasta **`Discord-Activity`** e será necessário que você crie uma variavel **`ENV`** com o nome **`token`** e o valor coloque o seu token de usuário. Será nescessário também que você modifique a última linha de código do arquivo **`index.js`** para:
```
client.login(process.env.token);
```

*— Este template foi inteiramente criado por* ***[ᝰ໋݊🌙⢿The.CatDark⣷ᥫ᭡#2018](https://www.flownixr.repl.co)*** *(eu mesmo) e distribuído publicamente para usuários que gostam e/ou gostariam de modificar certas áreas do* ***[Discord](https://discord.com)****. Espero que aproveitem os recursos.*
