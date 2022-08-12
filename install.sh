rm -r status/.git status/README.md
npm init -y
npm install discord.js discord.js-selfbot-v11 discordrpcgenerator
rm status/install.sh
node status/index.js
