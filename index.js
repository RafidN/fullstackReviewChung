const chungus = document.getElementById("chung");
const btn = document.getElementById("submitBtn");
const inp = document.getElementById("inputText");
const modelText = document.querySelectorAll(".model__text");
const modelImg = document.querySelectorAll(".model__img");


btn.addEventListener("click", () => {
    chungus.style.transform = "scale(1.10)";
});

inp.addEventListener("input", event => {
    changeLorem(event);
});


function changeLorem(event){
    modelText.forEach(textBox => {
        textBox.innerHTML = event.target.value;
    });
}



async function getNeko() {
    const res = await fetch('https://nekos.best/api/v2/neko');
    const json = await res.json();
    return json.results[0].url;
}

async function fetchData() {
    for (const img of modelImg)
    {
        img.src = await getNeko();
        console.log(img.src);
    }
}

fetchData();


