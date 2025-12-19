function ButtOn(){
    let randomNum = Math.floor(Math.random()*8+1)
    let imgsrc = "img" + randomNum + ".png"
    document.querySelector(".tash-img").src=imgsrc
}