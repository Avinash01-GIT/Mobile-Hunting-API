let input = document.querySelector("#searchBar");
let btnn = document.querySelector(".searchBtn");
let card = document.querySelector(".phonesShow");
let showDetail = document.querySelectorAll(".showDetail");
let detail = document.querySelector(".details");

detail.style.display = "none";

let phoneArrs = [];

btnn.addEventListener("click", (e) => {
  async function fetch_data() {
    let link = await fetch(
      `https://openapi.programming-hero.com/api/phones?search=${input.value}`
    );
    let value = await link.json();
    let arrs = value.data;
    console.log(arrs);
    createcard(arrs);
  }
  fetch_data();
});

function createcard(arrs) {
  arrs.forEach((element) => {
    // console.log(element);
    let newcard = document.createElement("div");
    const formattedSlug = element.slug.replace(/_/g, ' ');
    newcard.innerHTML = ` <img src=${element.image}>
   <h4>${element.phone_name}</h4>
   <p>A smartphone is a handheld electronic device that provides a connection to a cellular network and the internet.</p>
   <button class="showDetail">
       SHOW DETAILS
   </button>
   <span class="sln">${formattedSlug}</span>
   `;
    newcard.classList.add("phoneCard");

    phoneArrs.push(newcard);
  });

  card.replaceChildren(...phoneArrs);
  phoneArrs=[];
}

