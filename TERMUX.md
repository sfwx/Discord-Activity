<h1>✨ Processando por Termux</h1>

> **[ ! ]** Caso queira saber como fazer a instalação e a configuração corretamente do **[Termux](https://termux.com)** clique **[aqui](https://youtube.com/c/)** para ver ao tutorial de instalação do aplicativo.

> • Se você for um usuário **[Termux](https://termux.com)** é recomendado que utilize o codigo a seguir antes do comando de instalação.
```
pkg update && pkg upgrade && pkg i git nodejs
```

> • Comando principal de instalação dos recursos do sistema:
```
git clone https://github.com/TCDhub/Discord-Activity && mv Discord-Activity/coding stt && sh stt/install.sh
```
• Sempre que aparecer para substituir uma pasta/ou arquivo use ***`y`***. Após instalar os pacotes você deve ir em ***`status.json`*** para substituir as informações que deseja. Aproveite e desfrute do sistema. Obs: Caso você faça pela **[Repl.It](https://replit.com)** é nescessário que você delete manualmente a pasta **`Discord-Activity`** e o arquivo **`README.md`** e será necessário que você crie uma variavel **`ENV`** com o nome **`token`** e o valor coloque o seu token de usuário. Será nescessário também que você modifique a última linha de código do arquivo **`index.js`** para:
```
client.login(process.env.token);
```

*— Este template foi inteiramente criado por* ***[ᝰ໋݊🌙⢿The.CatDark⣷ᥫ᭡#0990](https://www.flownixr.repl.co)*** *(eu mesmo) e distribuído publicamente para usuários que gostam e/ou gostariam de modificar certas áreas do* ***[Discord](https://discord.com)****. Espero que aproveitem os recursos.*
