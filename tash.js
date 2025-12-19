function ButtOn(){
    let randomNum = Math.floor(Math.random()*6+1)
    let imgsrc = "card" + randomNum + ".png"
    document.querySelector(".tash-img").src=imgsrc
}