(function () {
  const inputMessage = document.querySelector("input");
  const lastDelivered = document.querySelector(".lastMsgDelivered");
  const submit = document.querySelector("#submit");

  submit.addEventListener("click", () => {
    const message = inputMessage.value;
    lastDelivered.textContent = message;
    inputMessage.value = "";
  });
})();
