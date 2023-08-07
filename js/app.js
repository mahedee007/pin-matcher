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
    const getpin = getPin();
    const displayPin = document.getElementById('show-pin');
    
   displayPin.value = getpin ;
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

document.getElementById('btn-submit').addEventListener('click', function(){
    const showPin = document.getElementById('show-pin');
    const showPinNumber = showPin.value;
    const showDigits = document.getElementById('show-number');
    const showDigitsNumbers = showDigits.value;

    const success = document.getElementById('btn-success');
    const failure = document.getElementById('btn-failure');
    
    if (showPinNumber === showDigitsNumbers){
        success.style.display = 'block';
        failure.style.display = 'none';

    }
    else{
        failure.style.display = 'block';
        success.style.display = 'none';
    }
})