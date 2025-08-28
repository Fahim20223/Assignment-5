function getElement(id) {
  const element = document.getElementById(id);
  return element;
}

const cardBtn = document.getElementsByClassName("card-btn");
// console.log(cardBtn);
for (let cardButton of cardBtn) {
  //   console.log(cardButton);
  cardButton.addEventListener("click", function () {
    // console.log("button clicked");
    const subTitle =
      cardButton.parentNode.parentNode.children[1].children[0].innerText;

    const number =
      cardButton.parentNode.parentNode.children[1].children[2].innerText;
    // console.log(number);

    const countCoin = getElement("coin-count");

    let countCoinInnerText = Number(countCoin.innerText);
    // console.log(countCoinInnerText);

    if (countCoinInnerText < 20) {
      alert(`❌ You don't have sufficient coins`);
      return;
    } else {
      alert(`📞 Calling at ${subTitle} ${number}...`);
    }
    const deduction = countCoinInnerText - 20;
    countCoin.innerText = deduction;

    const CardContainer = getElement("history-card");
    const newCard = document.createElement("div");

    newCard.innerHTML = `
    
       <div class="p-2">
                <div
                  class="flex justify-between items-center p-5 bg-[#FAFAFA] shadow-xl rounded-lg"
                >
                  <div>
                    <h1 class="font-bold">${subTitle}</h1>
                    <p class="text-gray-500">${number}</p>
                  </div>
                  <div><p>${new Date().toLocaleTimeString()}
                 </p></div>
                </div>
              </div>
            </div>
    
    `;

    CardContainer.appendChild(newCard);
  });
}

//heart count
const heartIcon = document.getElementsByClassName("heart");
for (const hearts of heartIcon) {
  hearts.addEventListener("click", function () {
    // console.log("heart clicked");
    const countHeart = getElement("count-heart");
    // console.log(countHeart);
    const innerText = countHeart.innerText;
    const MakeCountHeart = Number(innerText) + 1;
    countHeart.innerText = MakeCountHeart;
  });
}

//Clear Button
document.getElementById("clear-btn").addEventListener("click", function () {
  const CardContainer = getElement("history-card");
  CardContainer.innerHTML = "";
});

//Copy Button

// document.getElementById("btn-copy").addEventListener("click", function () {});

//Copy Hotline Numbers

const copyNumbers = document.getElementsByClassName("number-copy-btn");
for (const copyNumb of copyNumbers) {
  copyNumb.addEventListener("click", function () {
    // console.log("copied");
    const copyNumbBtn =
      copyNumb.parentNode.parentNode.children[1].children[2].innerText;

    navigator.clipboard.writeText(copyNumbBtn);

    alert(`The Number ${copyNumbBtn} copied`);
    const countCopy = getElement("counting-btn");
    const countCopyInside = countCopy.innerText;
    const countCopyInsideNumberConverted = Number(countCopyInside);
    const increaseNumber = countCopyInsideNumberConverted + 1;
    countCopy.innerText = increaseNumber;

    // console.log(copyNumbBtn);
  });
}
