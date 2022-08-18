const insert = document.getElementById("insert");


window.addEventListener("keydown", (e) => {
    insert.innerHTML = `<div class="boxes key">${e.key === " " ? "space": e.key}<small>key</small></div>
                           <div class="boxes key">${e.keyCode === "" ? "space": e.keyCode}<small>key</small></div>
                           <div class="boxes key">${e.code === "" ? "space": e.code}<small>key</small></div>
    `
})
