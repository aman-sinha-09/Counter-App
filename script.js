// isse mujhe counter id wala element mil gaya (i.e-> complete div)
// below both are correct
// const countValue = document.getElementById('counter');
const countValue = document.querySelector('#counter');


function increment(){
    // get the value from UI (HTML) and converting it into integer
    let value = parseInt(countValue.innerText);
    //Update the value
    value = value + 1;
    //set the value onto UI
    countValue.innerText = value;
};


function decrement(){
        // get the value from UI (HTML) and converting it into integer  
        let value = parseInt(countValue.innerText);
        //Update the value
        value = value - 1;
        //set the value onto UI
        countValue.innerText = value;
};