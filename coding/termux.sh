rm Discord-Activity
cd status
rm -r .git README.md
npm init -y
npm install discord.js discord.js-selfbot-v11 discordrpcgenerator
rm install.sh
nano status.json
clear
node index.js
cd ..