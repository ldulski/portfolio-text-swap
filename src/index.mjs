import "./styles.css";

var text = [
  "📺 Watching: Dimension20 Fantasy High: Junior Year",
  "🎵 Listening to: From the Start by Laufey",
  "🎮 Playing: Legend of Zelda TOTK",
  "🌙 Currently: Meditating brb...",
  "📺 Watching: the Broski Report",
  "🎵 Listening to: Not Another D&D Podcast",
  "🎮 Playing: A Night in the Woods",
  "🌙 Currently: Talking to the moon",
  "📺 Watching: Girl from Nowhere",
  "🎵 Listening to: Cowboy Carter",
  "🎮 Playing: Cult of the Lamb",
  "🌙 Currently: reading Conversation on Love by Natasha Lun",
];
var counter = 0;
var elem = document.getElementById("changeText");
var inst = setInterval(change, 10000);

function change() {
  elem.innerHTML = text[counter];
  counter++;
  if (counter >= text.length) {
    counter = 0;
    // clearInterval(inst); // uncomment this if you want to stop refreshing after one cycle
  }
}
