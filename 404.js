let count = 5;
let countdown = document.getElementById("countdown");
setInterval(() => {
    countdown.textContent = `リダイレクトまで ${count}...`;
    if (count == 0)
        location.href = "https://www.discordjs-memo.com/"
    count--;
}, 1000);
