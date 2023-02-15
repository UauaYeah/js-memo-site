(async function () {
    let menulist = $("#menulist");
    let genres = {};
    let content = $("#content");
    let selected;
    //一覧読み込み
    $.ajax("data/memos.json").done((memos) => {
        memos.forEach(memo => {
            let elem = $(`<li>`)
            elem.addClass("menucontent");
            elem.append("<i>＃</i>");
            elem.on("click", () => {
                if (selected)
                    selected.removeClass("selected");
                elem.addClass("selected");
                selected = elem;
                loadContent(memo.name);
            })
            let p = $("<p>");
            p.text(memo.title);
            elem.append(p);
            if (memo.genre) {
                let genre = genres[memo.genre];
                if (!genre) {
                    let newgenre = $("<details></details>");
                    newgenre.addClass("genre");
                    let summary = $("<summary></summary>");
                    summary.text(memo.genre);
                    newgenre.append(summary);
                    menulist.append(newgenre);
                    genres[memo.genre] = newgenre;
                    genre = newgenre;
                }
                genre.append(elem);
            } else {
                menulist.append(elem)
            }
        })
    }).catch(console.error);
    function loadContent(path) {
        $.ajax("data/memos/" + path).done((contentStr) => {
            let html = marked.parse(contentStr);
            content.html(html);
        });
    }
})();