const all_cards = document.getElementById("all_cards");
const game_star = document.getElementsByClassName("game_star");
let array = [];
if (JSON.parse(localStorage.getItem("Items"))) {
  array = JSON.parse(localStorage.getItem("Items"));
  document.getElementById("totalFavs").innerHTML = array.length;
}
printAllGames();
function printAllGames() {
  all_cards.innerHTML = "";
  for (let i = 0; i < cards.length; i++) {
    let status = "";
    if (array.indexOf(i) == -1) {
      status = "dead";
    }
    all_cards.innerHTML += `
        <div class="card fadeInDown" >
          <div class="game_name">${cards[i].name}</div>
          <div class="game_star ${status}"><i class="lni lni-star-filled"></i></div>
          <div class="play_button"><a href="${cards[i].link}" target="_blank">Play</a></div>
          <div class="icon_img"><img src="${cards[i].img_url}" alt="" /></div>
        </div>
        `;
  }
}
for (let i = 0; i < game_star.length; i++) {
  game_star[i].addEventListener("click", () => {
    starMark(i);
  });
}

function starMark(value) {
  if (array.indexOf(value) === -1) {
    array.push(value);
    localStorage.setItem("Items", JSON.stringify(array));
    game_star[value].classList.remove("dead");
  } else {
    array.splice(array.indexOf(value), 1);
    localStorage.setItem("Items", JSON.stringify(array));
    game_star[value].classList.add("dead");
  }
  document.getElementById("totalFavs").innerHTML = array.length;
}
