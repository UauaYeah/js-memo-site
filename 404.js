let count = 5;
let countdown = document.getElementById("countdown");
setInterval(() => {
    countdown.textContent = `リダイレクトまで ${count}...`;
    if (count == 0)
        location.href = "./index.html"
    count--;
}, 1000);