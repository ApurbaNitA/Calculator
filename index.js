document.getElementById('0').style.backgroundColor='red';
document.getElementById('1').style.backgroundColor='green';
document.getElementById('2').style.backgroundColor='darkorange';
document.getElementById('3').style.backgroundColor='darkorange';
document.getElementById('4').style.backgroundColor='darkorange';
document.getElementById('5').style.backgroundColor='blue';
document.getElementById('6').style.backgroundColor='darkorange';

let screen= document.getElementById('screen')
buttons= document.querySelectorAll('button')
let screenvalue='';
for(item of buttons){
    item.addEventListener('click',(e)=>{
        buttonText = e.target.innerText;
        console.log('button text is', buttonText);
    
    if(buttonText=='AC'){
        screenvalue=screen.value.slice(0,-1);
        screen.value=screenvalue;
    }
    else if(buttonText=='C'){

        screenvalue= "";
        screen.value=screenvalue;
    }
    else if(buttonText=='='){
        screen.value=eval(screenvalue);
    }
    else{
        screenvalue+=buttonText;
        screen.value=screenvalue;
    }
})
}