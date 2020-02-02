function quote_generator() {
  var quotes = ["Wait - YOU. I remember you... in the mountains!",
"BLOOD FOR THE BLOOD GOD!",
"My son. The day you were born the very forests of Lordaeron whispered the name - Arthas.",
"Me not that kind of orc!",
"I am the lucid dream.<br>The monster in your nightmares.<br>The fiend of a thousand faces.",
"GOOD NEWS everyone!",
"You will be known as the king who gave his life for NOTHING.",
"No king rules forever, my son."];
var quoteArea = document.getElementById('quote');
quoteArea.innerHTML = "<em>"+quotes[getRandomInt(0,quotes.length)]+"<em>";
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
