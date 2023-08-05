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

document.getElementById('calc-btn').addEventListener('click', function(){
    const displayNumber = document.getElementById('show-number');

})