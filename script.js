document.addEventListener("DOMContentLoaded", () => {
  let button1 = document.querySelector(".button1");
  let button2 = document.querySelector(".button2");
  const box = document.querySelector(".box");
  const copy = document.querySelector("#copy");
  let color1 = "#136b8a";
  let color2 = "#ff269b";

  const hexValue = () => {
    let myHexaValues = "0123456789abcdef";
    let code = "#";
    for (let i = 0; i < 6; i++) {
      code += myHexaValues[Math.floor(Math.random() * 16)];
    }
    return code;
  };

  const handleButton1 = () => {
    color1 = hexValue();
    button1.textContent = color1;
    document.body.style.background = `linear-gradient(90deg,${color1},${color2})`;
    box.textContent = `background: (linear-gradient(90deg,${color1},${color2}));`;
  };

  const handleButton2 = () => {
    color2 = hexValue();
    button2.textContent = color2;
    document.body.style.background = `linear-gradient(90deg,${color1},${color2})`;
    box.textContent = `background: (linear-gradient(90deg,${color1},${color2}));`;
  };

  copy.addEventListener("click", function () {
  const text = box.textContent;

  navigator.clipboard.writeText(text)
    .then(() => {
      alert("Text copied");
    })
    .catch(err => {
      console.error("Failed to copy text: ", err);
    });
});

  button1.addEventListener("click", handleButton1);
  button2.addEventListener("click", handleButton2);
});
