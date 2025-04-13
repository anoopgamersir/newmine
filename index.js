const mineflayer = require('mineflayer');

function createBot() {
  const bot = mineflayer.createBot({
    host: 'JINGALALAHUHU_S1.aternos.me', // server IP
    port: 46005, // server port
    username: 'JingaGuard',
    version: '1.20.4'
  });

  bot.once('spawn', () => {
    console.log('✅ Bot has joined the server.');
    setTimeout(() => {
      bot.chat('/register 123456'); // replace if needed
      bot.chat('/login 123456');
    }, 3000);
  });

  bot.on('end', () => {
    console.log('🔁 Disconnected! Reconnecting in 5 sec...');
    setTimeout(createBot, 5000);
  });

  bot.on('error', err => {
    console.log('⚠️ Error:', err);
  });

  bot.on('kicked', reason => {
    console.log('❌ Kicked:', reason);
  });

  bot.on('chat', (username, message) => {
    if (username === bot.username) return;
    if (message.toLowerCase() === 'hello') {
      bot.chat(`Hi ${username}! I am your bot 🤖`);
    }
  });
}

createBot();
