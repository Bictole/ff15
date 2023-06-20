function anygame(message) {
    let games = ['civ', 'league', 'rocket', 'paladins', 'lordz.io', 'golf', 'age of empire', 'amogus', 'battleground', 'worms', 'go sleep'];
  
    let thegame = games[Math.floor(Math.random() * games.length)];
    let res = thegame;
  
    message.reply(({
      content: res,
    }))
  }
  
  module.exports = { anygame: anygame };