let h1 = document.getElementById("number")
let counter = 0

let input = document.getElementById("input").onclick = () => {
    let time = setTimeout(() => {
        counter++;
        h1.innerHTML = `${counter}/sec`
        console.log(counter)
        if (time) {
            setInterval(() => {location.reload()}, 2000)
        }
    },1000)
}