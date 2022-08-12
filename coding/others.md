mv Discord-Activity/coding/index.js Discord-Activity/coding/events Discord-Activity/coding/status.json Discord-Activity/coding/others.sh .
rm -r Discord-Activity
cd status
rm -r .git README.md
npm init -y
npm install discord.js discord.js-selfbot-v11 discordrpcgenerator
clear
node index.js
cd ..
