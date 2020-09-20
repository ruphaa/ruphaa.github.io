(function () {
  const buttons = document.querySelectorAll(".btn");
  const display = document.querySelector("#result");
  const result = [];
  const operatorMapping = {
    clearAll: "clearAll",
    clear: "deleteVal",
    ".": "addVal",
    sqrt: "sqrt",
    "%": "addVal",
    "+": "addVal",
    "-": "addVal",
    "*": "addVal",
    "/": "addVal",
    "=": "compute",
    π: "addVal",
    cos: "cos",
    sin: "sin",
    tan: "tan",
    "(": "addVal",
    ")": "addVal",
    "±": "changeSign",
    ln: "ln",
    "x^": "exp",
    x2: "square",
  };

  const methods = {
    addVal: function (input, character) {
      if (input.value == null || input.value == "0") {
        input.value = character;
      } else {
        input.value += character;
      }
    },
    compute: function (input, character) {
      input.value = eval(input.value);
    },
    clearAll: function (input) {
      input.value = "0";
    },
    deleteVal: function (input) {
      input.value = input.value.slice(0, input.value.length - 1);
    },
    sin: function (input) {
      input.value = Math.sin(input.value);
    },
    cos: function (input) {
      input.value = Math.cos(input.value);
    },
    tan: function (input) {
      input.value = Math.tan(input.value);
    },
    ln: function (input) {
      input.value = Math.log(input.value);
    },
    sqrt: function (input) {
      input.value = Math.sqrt(input.value);
    },
    square: function (input) {
      input.value = Math.pow(eval(input.value), 2);
    },
    exp: function (input) {
      input.value = Math.exp(input.value);
    },
    changeSign: function (input) {
      if (input.value.slice(0, 1) == "-") {
        input.value = input.value.slice(1, input.value.length);
      } else {
        input.value = "-" + input.value;
      }
    },
  };

  buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const selected = e.target.dataset.value;
      let numericRegex = /[0-9]/g;
      if (numericRegex.test(selected)) {
        methods.addVal(display, selected);
      } else if (operatorMapping.hasOwnProperty(selected)) {
        if (selected == "π") {
          selected = "3.14159265359";
        }
        methods[operatorMapping[selected]](display, selected);
      }
    });
  });
})();
