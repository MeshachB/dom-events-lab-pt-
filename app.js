/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/
const buttons = document.querySelectorAll('.button');

/*----------------------------- Event Listeners -----------------------------*/
buttons.forEach((button)=>{
    button.addEventListener('click' , (e) => {
        console.log(e.target.innerText);
    });
});
/*-------------------------------- Functions --------------------------------*/
