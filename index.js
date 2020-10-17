const numberBtn = document.querySelectorAll(".js-number");
const operationBtn = document.querySelectorAll(".js-operation");
const outputBlock = document.querySelector(".js-output");
let numClicked = true;
let operClicked = false;

const handleClickNum = (event) => {
  if (numClicked == true) {
    const { id: number } = event.path[0];
    outputBlock.innerText = outputBlock.innerText + number;
    operClicked = true;
  }
};

const handleClickOper = (event) => {
  const { id: oper } = event.path[0];

  if (oper == "C") {
    outputBlock.innerText = "";
    numClicked = true;
    operClicked = false;
  } else if (oper == "=") {
    if (outputBlock.innerText !== "") {
      outputBlock.innerText = eval(outputBlock.innerText);
      operClicked = true;
      numClicked = false;
    }
  } else {
    if (operClicked == true) {
      outputBlock.innerText = outputBlock.innerText + oper;
      numClicked = true;
      operClicked = false;
    }
  }
};

for (i = 0; i < numberBtn.length; i++) {
  numberBtn[i].addEventListener("click", handleClickNum);
}
for (i = 0; i < operationBtn.length; i++) {
  operationBtn[i].addEventListener("click", handleClickOper);
}
