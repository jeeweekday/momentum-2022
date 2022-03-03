const clock = document.querySelector("#clock");
// padStart를 이용하기 위해 string으로 변환 및 padStart로 자리 맞춰주기
function getClock() {
    const date = new Date;
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}
// 함수명에 ()를 넣지 않는것이 중요!
getClock();
setInterval(getClock,1000);