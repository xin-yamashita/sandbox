//要素を取得 ..①
const index = document.getElementById("index");

//変換後のHTMLをここに配置 ..②
let inner = "";

//１文字ずつ処理をする ..③
for(i=0;i<index.innerText.length;i++) {

    //<span>〜</span>で囲み、innerに追加 ..④
    inner += `<span>${index.innerText[i]}</span>`
}

//indexのHTMLを変更 ..⑤
index.innerHTML = inner;

for(i=0;i<index.children.length;i++){
    index.children[i].classList.add("each");
    }