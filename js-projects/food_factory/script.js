(function () {
  const btns = document.querySelectorAll(".category");
  const items = document.querySelectorAll(".item");
  const search = document.querySelector("#searchBox");
  const modal = document.querySelector(".selected");
  const close = document.querySelector(".close");
  const modalContainer = document.querySelector(".modal-container");

  // Filter Items based on the menu click
  btns.forEach((button) => {
    button.addEventListener("click", (e) => {
      const category = e.target.dataset.menu;
      items.forEach((item) => {
        if (category == "all") {
          item.style.display = "block";
        } else {
          if (item.classList.contains(category)) {
            item.style.display = "block";
          } else {
            item.style.display = "none";
          }
        }
      });
    });
  });

  // Filter items based on search
  search.addEventListener("keyup", (e) => {
    const searchVal = e.target.value;
    items.forEach((item) => {
      if (item.textContent.trim().toLowerCase().includes(searchVal)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });

  // Open Modal
  items.forEach((item) => {
    item.addEventListener("click", (e) => {
      const src = e.target.src;
      modal.style.backgroundImage = `url(${src})`;
      modalContainer.classList.remove("hide");
    });
  });

  close.addEventListener("click", (e) => {
    modalContainer.classList.add("hide");
  });
})();
