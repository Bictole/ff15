const fs = require('fs');

function kivaou(message) {
  let rawdata = fs.readFileSync('champion.json');
  let champions = JSON.parse(rawdata);

  let los_boyos = ['Dankan', 'Vicotr', 'Loriz', 'Daguyzos', 'EforB'];
  los_boyos.sort(() => Math.random() - 0.5);

  let champs = [];
  for (let i = 0; i < 5; i++) {
    let randomInt = Math.floor(Math.random() * Object.keys(champions.data).length);

    let i = 0;
    for (let champion in champions.data) {
      if (i == randomInt) {
        champs.push(champion);
      }
      i++;
    }
  }

  let roles = ['Top', 'Jungle', 'Mid', 'ADC', 'Support'];

  console.log('----------')
  let res = '';
  for (let i = 0; i < 5; i++) {
      res += los_boyos[i] + ' plays ' + champs[i] + ' ' + roles[i] + '\n';
  }
  
  message.reply(({
      content: res,
    }))
}

module.exports = { kivaou: kivaou };