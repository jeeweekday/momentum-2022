const imgs = ["0.JPG","1.JPG","2.JPG"];
const pickImg = imgs[Math.floor(Math.random() * imgs.length)];
// 중간에 변수 pickNum을 만들려 했지만 이미 quotes.js에서 선언을해서 따로 변수 선언을 안하고 그냥 랜덤숫자뽑음.
const bgBox = document.querySelector("#bg-box");
const bgImg = document.createElement("img");
bgImg.src = `img/${pickImg}`;
bgImg.classList.add("bg-img");
bgBox.appendChild(bgImg);
// prependChild or insertBefore을 사용해서도 삽입가능.