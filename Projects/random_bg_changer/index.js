const generateRandomColor = () => {
  const series = "0123456789ABCDEF";
  let randomColor = "#",
    randomNumber;

  for (let i = 0; i < 6; i++) {
    randomNumber = Math.floor(Math.random() * 16);
    console.log("🚀 ~ generateRandomColor ~ randomNumber:", randomNumber);
    randomColor += series[randomNumber];
  }
  return randomColor;
};

let intervalReference;

let startChangingColor = () => {
  const changeColor = () => {
    const randomColor = generateRandomColor();
    console.log("🚀 ~ randomColor:", randomColor);
    document.querySelector("body").style.backgroundColor = randomColor;
  };
  intervalReference = setInterval(changeColor, 1000);
};

let stopChangingColor = () => {
  clearInterval(intervalReference);
};

document.getElementById("button1").addEventListener("click", function () {
  startChangingColor();
});
document.getElementById("button2").addEventListener("click", function () {
  stopChangingColor();
});

new Promise(function (resolve, reject) {
  const data = { name: "Krupali", age: 29 };
  resolve(data);
}).then((data) => console.log("data::", data));
