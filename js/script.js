// Task 8

// window.onload = () => {
//     alert('Добро пожаловать!')
// }


// Task 9

// let btn = document.querySelector('#btn');

// btn.onclick = () => {
//     document.body.style.background = 'pink'
//     console.log('click')
// }


// Task 10 

// let btn = document.querySelector('#btn');
// let list = document.querySelector('#list');

// btn.addEventListener('click', () => {
//     let firstName = document.querySelector('#firstName').value;
//     let lastName = document.querySelector('#lastName').value;
//     let password = document.querySelector('#password').value;

//     if(firstName && lastName && password){
//         list.innerText = 'Your first name: ' + firstName
//         + '\n Your last name: ' + lastName
//         + '\n Your password: ' + password
//     } else {
//         alert('Please fill in the form!')
//     }
// })


// Task 11

// let square = document.querySelector('#square');
// let move = 0;
// let moveVertical = 0;

// document.addEventListener('keydown', function(e){
//     if (e.keyCode == 37){
//         move -= 100;
//         square.style.left = `${move}px`;
//         if (move <= 0) move +=100;
//     }

//     if (e.keyCode == 39){
//         move += 100;
//         square.style.left = `${move}px`;
//     }

//     if (e.keyCode == 38){
//         moveVertical -= 100;
//         square.style.top = `${moveVertical}px`;
//     }

//     if (e.keyCode == 40){
//         moveVertical += 100;
//         square.style.top = `${moveVertical}px`
//     }
// })


// Task 12

// document.addEventListener('mousemove', event => {
//     console.log(event.clientX, event.clientY)
// })