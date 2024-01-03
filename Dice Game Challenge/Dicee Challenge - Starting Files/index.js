// for image 1
var rand = Math.random();
var rand1 = (rand*6) + 1;
var randomNumber1 = Math.floor(rand1);
console.log(randomNumber1);

const imgElement1 = document.querySelector('.img1');

if(randomNumber1===1){
    imgElement1.src = './images/dice1.png';
}
else if(randomNumber1===2){
    imgElement1.src = './images/dice2.png';
}
else if(randomNumber1===3){
    imgElement1.src = './images/dice3.png';
}
else if(randomNumber1===4){
    imgElement1.src = './images/dice4.png';
}
else if(randomNumber1===5){
    imgElement1.src = './images/dice5.png';
}
else if(randomNumber1===6){
    imgElement1.src = './images/dice6.png';
}


// for image 2
var rand2 = Math.random();
var rand3 = (rand2*6) + 1;
var randomNumber2 = Math.floor(rand3);


const imgElement2 = document.querySelector('.img2');

if(randomNumber2===1){
    imgElement2.src = './images/dice1.png';
}
else if(randomNumber2===2){
    imgElement2.src = './images/dice2.png';
}
else if(randomNumber2===3){
    imgElement2.src = './images/dice3.png';
}
else if(randomNumber2===4){
    imgElement2.src = './images/dice4.png';
}
else if(randomNumber2===5){
    imgElement2.src = './images/dice5.png';
}
else if(randomNumber2===6){
    imgElement2.src = './images/dice6.png';
}


const heading = document.querySelector('h1');
if(randomNumber1>randomNumber2){
    heading.textContent = 'Player 1 Win';
}
else if(randomNumber1<randomNumber2){
    heading.textContent = 'Player 2 Win';
}
else {
    heading.textContent = 'Draw!';
}