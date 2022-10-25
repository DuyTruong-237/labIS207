function changeColor(){
    const background = document.querySelector('.background');
    const arrayColor = ['red','yellow','pink','gray','black','orange','blue'];
    let random = arrayColor[randomColor(arrayColor)];
    background.style.backgroundColor = random;
    // console.log(random);
}
function randomColor(array){
    return Math.floor(Math.random()*array.length);
}