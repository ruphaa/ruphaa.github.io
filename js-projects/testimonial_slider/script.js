(function testimonialSlider() {
  const btns = document.querySelectorAll("a");
  const image = document.querySelector(".image");
  const main = document.querySelector(".main");
  const author = document.querySelector(".author span");
  let index = 0;
  const testimonials = [];

  function Testimonial(img, quote, author) {
    this.img = img;
    this.quote = quote;
    this.author = author;
  }

  const createTestimonials = function (img, name, quote) {
    let image = `/images/${img}.jpg`;
    testimonials.push(new Testimonial(image, name, quote));
  };

  createTestimonials(
    "captain",
    "I don't want to kill anyone, but I don't like bullies; I don't care where they're from.",
    "Captain America",
    "The First Avenger"
  );
  createTestimonials(
    "batman",
    "It's Not Who I Am Underneath, But What I Do That Defines Me.",
    "Dark Knight"
  );
  createTestimonials(
    "iron-man",
    "Heroes are made by the paths they choose, not the powers they are graced with.",
    "Iron Man",
    ""
  );
  createTestimonials(
    "thor",
    "You should know that when you betray me, I will kill you.",
    "Thor"
  );
  createTestimonials(
    "dany",
    "I am Daenerys Stormborn of House Targaryen, of the blood of Old Valyeria. I am the dragon's daughter, and I swear to you that those who would harm you will die screaming.",
    "Daenerys Targaryen"
  );

  btns.forEach((button) => {
    button.addEventListener("click", () => {
      if (button.classList.contains("previous")) {
        index--;
        if (index < 0) {
          index = testimonials.length - 1;
        }
      } else if (button.classList.contains("next")) {
        index++;
        if (index > testimonials.length) {
          index = 0;
        }
      }
      image.style.backgroundImage = `url(${testimonials[index].img})`;
      main.textContent = testimonials[index].quote;
      author.textContent = testimonials[index].author;
    });
  });
})();
