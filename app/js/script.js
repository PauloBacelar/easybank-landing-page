const btnHamburger = document.querySelector("#btnHamburger");

btnHamburger.addEventListener("click", () => {
  console.log("open hamburger");
  btnHamburger.classList.toggle("open");
});
