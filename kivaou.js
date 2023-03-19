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

function kivaouTryhard(message) {
  let top = ['Aatrox', 'Akali', 'Camille', 'Chogath', 'Darius', 'DrMundo', 'Fiora', 'Gangplank', 'Garen', 'Gnar', 'Gwen', 'Illaoi', 'Irelia', 'Jax', 'Jayce', 'Kayle', 'Kayn', 'Kennen', 'Kled', 'KSante', 'Malphite', 'Maokai', 'Mordekaiser', 'Nasus', 'Olaf', 'Ornn', 'Pantheon', 'Poppy', 'Quinn', 'Renekton', 'Riven', 'Rumble', 'Sett', 'Shen', 'Singed', 'Sion', 'TahmKench', 'Teemo', 'Trundle', 'Tryndamere', 'Urgot', 'Volibear', 'Yorick'];
  let jungle = ['Amumu', 'Belveth', 'Diana', 'Ekko', 'Elise', 'Evelynn', 'Fiddlesticks', 'Gragas', 'Graves', 'Hecarim', 'Ivern', 'JarvanIV', 'Khazix', 'Kindred', 'LeeSin', 'Lillia', 'MasterYi', 'MonkeyKing', 'Nidalee', 'Nocturne', 'Nunu', 'Rammus', 'RekSai', 'Rengar', 'Sejuani', 'Shaco', 'Shyvana', 'Skarner', 'Udyr', 'Vi', 'Viego', 'Warwick', 'XinZhao', 'Zac'];
  let mid = ['Ahri', 'Akshan', 'Anivia', 'Annie', 'AurelionSol', 'Azir', 'Cassiopeia', 'Corki', 'Fizz', 'Galio', 'Karthus', 'Kassadin', 'Katarina', 'Leblanc', 'Lissandra', 'Malzahar', 'Neeko', 'Orianna', 'Qiyana', 'Ryze', 'Sylas', 'Syndra', 'Taliyah', 'Talon', 'TwistedFate', 'Veigar', 'Velkoz', 'Vex', 'Viktor', 'Vladimir', 'Xerath', 'Yasuo', 'Yone', 'Zed', 'Ziggs', 'Zoe'];
  let adc = ['Aphelios', 'Ashe', 'Caitlyn', 'Draven', 'Ezreal', 'Jhin', 'Jinx', 'Kaisa', 'Kalista', 'KogMaw', 'Lucian', 'MissFortune', 'Nilah', 'Samira', 'Sivir', 'Tristana', 'Twitch', 'Varus', 'Vayne', 'Xayah', 'Zeri'];
  let support = ['Alistar', 'Bard', 'Blitzcrank', 'Brand', 'Braum', 'Heimerdinger', 'Janna', 'Karma', 'Leona', 'Lulu', 'Lux', 'Morgana', 'Nami', 'Nautilus', 'Pyke', 'Rakan', 'Rell', 'Renata', 'Senna', 'Seraphine', 'Sona', 'Soraka', 'Swain', 'Taric', 'Thresh', 'Yuumi', 'Zilean', 'Zyra'];

  let los_boyos = ['Dankan', 'Vicotr', 'Loriz', 'Daguyzos', 'EforB'];
  los_boyos.sort(() => Math.random() - 0.5);

  let champs = [];

  let randomTop = top[Math.floor(Math.random() * top.length)];
  let randomJungle = jungle[Math.floor(Math.random() * jungle.length)];
  let randomMid = mid[Math.floor(Math.random() * mid.length)];
  let randomADC = adc[Math.floor(Math.random() * adc.length)];
  let randomSupport = support[Math.floor(Math.random() * support.length)];

  champs.push(randomTop);
  champs.push(randomJungle);
  champs.push(randomMid);
  champs.push(randomADC);
  champs.push(randomSupport);

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

module.exports = { kivaou: kivaou, kivaouTryhard: kivaouTryhard };