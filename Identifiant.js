function makeid(num = 4) {
  let resultat = "";
  let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstucwxyz0123456789";
  var characteres = characters.length;
  for (var i = 0; i < num; i++) {
    result += characters.charAt(Math.floor(Math.random() * characteres));
  }
  return resultat;
}
module.exports = { makeid };
