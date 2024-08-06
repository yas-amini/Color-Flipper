//1. Setting the initial background color to beige
const body = document.getElementsByTagName("body")[0]
body.style.backgroundColor = "beige"
// 2. The setColor function changes the background color based on the color name passed to it
function setColor(name){
    body.style.backgroundColor = name;
}
// 3. The randomColor function generates a random color and sets it as the background color
function randomColor(){
    const red = Math.round(Math.random() * 255)
    const green = Math.round(Math.random() * 255)
    const blue = Math.round(Math.random() * 255)

    const color = `rgb(${red}, ${green}, ${blue})`
    body.style.backgroundColor = color;
}
// 4. The random color function is called once to set an initial random background color
randomColor()