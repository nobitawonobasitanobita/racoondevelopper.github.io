//Created By Racoon
const playername = Cookies.get('name');

function nameset() {
    if (playername == undefined || playername == null) {
        let namewhat = prompt("プレイヤーネームを設定してください。", "例：太郎");
        if (namewhat == null) {
            alert("プレイヤーネームは必ず設定してください。");
            nameset();
            return;
        } else if (namewhat == "例：太郎") {
            alert('あなたの名前を入力してください。');
            return;
        }
        Cookies.set("Playername", namewhat); //名前をCookieに設定
        Cookies.set("bal", 0);
        alert(`${namewhat}で設定しました。`);
        window.location.href = "../html/home.html";
    }
}
$(document).ready(function() { //ページリロード時に実行
    const name = Cookies.get("Playername");
    if (name == undefined) {
        nameset();
    } else {
        window.location.href = "../html/home.html"
    }
});

function damedatta() {
    nameset();
}