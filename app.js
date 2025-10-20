/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/
const buttons = document.querySelectorAll('.button');
const display = document.querySelector('.display');

/*----------------------------- Event Listeners -----------------------------*/
buttons.forEach((button)=> {
    button.addEventListener('click' , (e) => {
        console.log(e.target.innerText); 
        const value = e.target.innerText;
       
        if (value === 'C'){
            display.innerText = '';
        }   
        else if (value === '=') {
        display.innerText = eval(display.innerText);    
        }
        else{
        display.innerText += value;
        }
        
    });
});
/*-------------------------------- Functions --------------------------------*/
