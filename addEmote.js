function addEmote(name, message, msg) {
  if (name.includes("bictole")) {
      msg.react("503691113123545093");
  }
  else {
    msg.react("428533050310262791")
  }
}

module.exports = { addEmote: addEmote };