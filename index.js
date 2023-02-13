let count = 5;
setInterval(() => {
    console.log(`discordjsmemoのホームに飛ぶまで ${count}...;`)
    if (count == 0)
        location.href = "./index.html"
        count--;
}, 1000);