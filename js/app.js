function generatePin(){
    const pin = Math.round(Math.random()* 10000);
    return pin;
}
document.getElementById('genarate-pin').addEventListener('click', function(){
   const displayPin = document.getElementById('show-pin');
   displayPin.value = generatePin();
})