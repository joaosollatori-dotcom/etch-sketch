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


function showGrid(q, number) {
    alert(`teste: number: ${number}`)

    for (let i = 0; i < q; i++) {
        const cell = document.createElement("div")
        cell.classList.add("grid-item")

        cell.style.width = `calc(100% / ${number})`;
        cell.style.height = `calc(100% / ${number})`;

        cell.addEventListener("mouseover", () => {
            cell.style.backgroundColor = "black";
        })

        gridContainer.appendChild(cell)
    }

    return
}