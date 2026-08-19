const gridContainer = document.getElementById("grid-container")

function resetGame() {
    const number = prompt("Digite um numero:")

    if (number <= 100) {
        gridContainer.innerHTML = "";
        const total = number * number
        showGrid(total, number)
    } else {
        alert("Somente números de 0 a 100 são aceitos, tente novamente.")
    }
    return number
}

function getRandomColor () {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    console.log(`rgb(${r},${g},${b})`)

    return `rgb(${r},${g},${b})`
}

function showGrid(q, number) {
    alert(`teste: number: ${number}`)

    for (let i = 0; i < q; i++) {
        const cell = document.createElement("div")
        cell.classList.add("grid-item")

        cell.style.width = `calc(100% / ${number})`;
        cell.style.height = `calc(100% / ${number})`;
        cell.style.opacity = "0.1"

        cell.addEventListener("mouseover", () => {
            cell.style.backgroundColor = getRandomColor();
            const currentOpacity = parseFloat(cell.style.opacity);
            cell.style.opacity = currentOpacity + 0.1;
        })
        
        
        gridContainer.appendChild(cell)
    }
    return
}