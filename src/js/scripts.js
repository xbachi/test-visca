"use strict";
const btnChange = document.querySelector("#btnChangeView");
const container = document.querySelector(".sites-view");
const btnOrdenar = document.querySelector("#sort");

const data = [
  {
    brand: "power play",
    logoUrl: "images/logo-powerplay.png",
    partnerlink: "https://www.powerplay.com/",
    reviewlink: "http://www.reviewlink.com",
    bonusHeading: "100% sign up bonus",
    bonusText: "up to",
    bonusAmount: "200",
    freeBet: "",
  },
  {
    brand: "sports interaction",
    logoUrl: "images/logo-sports.png",
    partnerlink: "https://www.sportsinteraction.com/",
    reviewlink: "http://www.reviewlink.com",
    bonusHeading: "- exclusive -",
    bonusText: "bonus up to",
    bonusAmount: "200",
    freeBet: "",
  },
  {
    brand: "bodog",
    logoUrl: "images/logo-bodog.png",
    partnerlink: "https://www.bodog.eu/",
    reviewlink: "http://www.reviewlink.com",
    bonusHeading: "- exclusive -",
    bonusText: "up to",
    bonusAmount: "200",
    freeBet: "",
  },
  {
    brand: "betway",
    logoUrl: "images/logo-betway.png",
    partnerlink: "https://betway.es/",
    reviewlink: "http://www.reviewlink.com",
    bonusHeading: "100% sign up bonus",
    bonusText: "up to",
    bonusAmount: "200",
    freeBet: "",
  },
  {
    brand: "spin sports",
    logoUrl: "images/logo-spinsports.png",
    partnerlink: "https://www.spinsports.com/",
    reviewlink: "http://www.reviewlink.com",
    bonusHeading: "- exclusive -",
    bonusText: "up to",
    bonusAmount: "500",
    freeBet: "free bet",
  },
];

// mostrar cards en ui
function mostrarData(datos, clase) {
  datos.forEach(function (item) {
    container.innerHTML += `
    <div  class="item col-md-12 col-lg-4 ${clase}"> 
    <a class="linkwrap" href="${item.partnerlink}"></a>     
    <div class="partner-logo">
      <a class="link-logo" href="${item.partnerlink}"
                ><img src="dist/${item.logoUrl}" alt="${item.brand}" /></a>
    </div>
    <div class="review">
      <a href="${item.reviewlink}" class="link-stars">
        <span class="stars">
          <i class="star"></i>
          <i class="star"></i>
          <i class="star"></i>
          <i class="star"></i>
          <i class="star"></i>
        </span>
      </a>
      <a href="${item.reviewlink}" class="link-review"
      ><span>Read</span> Review</a
    > 
    
      
    </div>
    <div class="move-right">
      <div class="site-bonus">
       <p class="bonus-heading">${item.bonusHeading}</p>
        <p class="bonus-mobile">${item.freeBet ? item.freeBet : "bonus"}</p>
        <p class="bonus-text">${item.bonusText}</p>
        <p class="bonus-amount">$${
          item.bonusAmount
        } <span class="bonus-free-bet">${item.freeBet}</span> </p>
        
      </div>
      <button class="btn-play">
        <span class="btn-text">Play Now</span>
        <span class="arrow"></span>
      </button>
    </div>
  </div>`;
  });
}

// muestro data en forma card como default
mostrarData(data, "grid-group-item");

// seleccionar cards luego que fueron creadas
let cards = document.querySelectorAll(".item");

// ordenar cards alfabeticamente
btnOrdenar.addEventListener("click", function (e) {
  e.preventDefault();
  container.classList.toggle("sorted");

  // chequeo en que forma estan mostrada la info antes de ordenarla para luego mostrala de la misma manera (list o card)
  const viewCheck = container.classList.contains("list-view")
    ? "list-group-item"
    : "grid-group-item";

  const dataAZ = data
    .slice()
    .sort((a, b) => (a.brand.toLowerCase() > b.brand.toLowerCase() ? 1 : -1));
  const dataZA = data
    .slice()
    .sort((b, a) => (a.brand.toLowerCase() > b.brand.toLowerCase() ? 1 : -1));

  const sortedData = container.classList.contains("sorted") ? dataAZ : dataZA;

  container.innerHTML = "";

  //muestro la data ordenada y en la forma que estaba antes (list o card)
  mostrarData(sortedData, viewCheck);
  cards = document.querySelectorAll(".item");
});

btnChange.addEventListener("click", (e) => {
  cards.forEach(function (item) {
    item.classList.toggle("list-group-item");
    item.classList.toggle("grid-group-item");
  });
  container.classList.toggle("list-view");
});
