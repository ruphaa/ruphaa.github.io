const images = [
  { url: "/images/bali.jpg", place: "BALI" },
  { url: "/images/seoul.jpg", place: "SEOUL" },
  { url: "/images/bora-bora.jpg", place: "BORA BORA" },
  { url: "/images/kashmir.jpg", place: "KASHMIR" },
  { url: "/images/iceland.jpg", place: "ICELAND" },
  { url: "/images/norway.jpg", place: "NORWAY" },
];
let counter = 0;

(function slider() {
  const buttons = document.querySelectorAll("a");
  const container = document.querySelector(".slider");
  const place = document.querySelector(".slider h3");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      if (button.classList.contains("previous")) {
        counter--;
        if (counter < 0) {
          counter = images.length - 1;
        }
      } else if (button.classList.contains("next")) {
        counter++;
        if (counter > images.length - 1) {
          counter = 0;
        }
      }
      container.style.backgroundImage = `url(${images[counter].url})`;
      place.textContent = images[counter].place;
    });
  });
})();
