const fav_cards = document.getElementById("fav_cards");
const game_star1 = document.getElementsByClassName("game_star1");
let array1 = [];

if (JSON.parse(localStorage.getItem("Items"))) {
  array1 = JSON.parse(localStorage.getItem("Items"));
  document.getElementById("totalFavs").innerHTML = array1.length;
}
printFavourites();

function starMark1(value) {
  if (array1.indexOf(value) === -1) {
    array1.push(value);
    localStorage.setItem("Items", JSON.stringify(array1));
  } else {
    array1.splice(array1.indexOf(value), 1);
    localStorage.setItem("Items", JSON.stringify(array1));
  }
  document.getElementById("totalFavs").innerHTML = array1.length;
  printFavourites();
}

function printFavourites() {
  fav_cards.innerHTML = "";
  for (let i = 0; i < cards.length; i++) {
    let status = "";
    if (array1.indexOf(i) == -1) {
      status = "dead";
    }
    if (!status) {
      fav_cards.innerHTML += `
          <div class="card fadeInDown" >
            <div class="game_name">${cards[i].name}</div>
            <div class="game_star1 ${status}" onclick="starMark1(${i})"><i class="lni lni-star-filled"></i></div>
            <div class="play_button"><a href="${cards[i].link}" target="_blank">Play</a></div>
            <div class="icon_img"><img src="${cards[i].img_url}" alt="" /></div>
          </div>
          `;
    }
  }
}
