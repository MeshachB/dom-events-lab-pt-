/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/
const buttons = document.querySelectorAll('.button');
const display = document.querySelector('.display');

/*----------------------------- Event Listeners -----------------------------*/
buttons.forEach((button)=> {
    button.addEventListener('click' , (e) => {
        console.log(e.target.innerText); 
        display.innerText += value;
    });
});
/*-------------------------------- Functions --------------------------------*/
