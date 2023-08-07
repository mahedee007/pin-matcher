function getPin(){
    const random = generatePin();
    const randomString = random + '';
    if (randomString.length === 4){
        return random;
    }else{
        return getPin();
    }

}


function generatePin(){
    const pin = Math.round(Math.random()* 10000);
    return pin;
}
document.getElementById('genarate-pin').addEventListener('click', function(){
   const displayPin = document.getElementById('show-pin');
   displayPin.value = getPin();
})

document.getElementById('calc-btn').addEventListener('click', function(event){
    const numbers = event.target.innerText;
    const showNumbers = document.getElementById('show-number');
    const previousShowNumbers = showNumbers.value;
    const newShowNumbers = previousShowNumbers + numbers;
    

    
    if (isNaN(numbers)){
        if(numbers === 'C'){
            showNumbers.value = '';
        }else if (numbers === '<'){
            const digits = previousShowNumbers.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            showNumbers.value = remainingDigits;
           
            
        }
        
    }else{
        showNumbers.value = newShowNumbers;
    }

})