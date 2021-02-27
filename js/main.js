$(document).ready(function() { //ページリロード時に実行
    const name = Cookies.get("Playername");
    if (name == undefined) {
        window.location.href = "../html/nameset.html"
    } else {　　　
        const pname = Cookies.get("Playername");
        let title = document.getElementById("title");
        title.innerHTML = `<h1>${pname}の冒険</h1>`
    }
});