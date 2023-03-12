function addEmote(name, message, msg) {
  if (name.includes("bictole")) {
    msg.react("428533050310262791");
  }
  else if (name.includes("marius")) {
    msg.react("1064287860024422440");
  }
  else if (name.includes("rehoon")) {
    msg.react("356541796832247818");
  }
  else if (name.includes("robert chassiet")) {
    msg.react("428589910228992024");
  }
  else if (name.includes("taylord12")) {
    msg.react("428592006260981780");
  }
  else if (name.includes("euphorbe")) {
    msg.react("428536247330537473");
  }
  else {
    msg.react("1063815411289837648")
  }
}

module.exports = { addEmote: addEmote };