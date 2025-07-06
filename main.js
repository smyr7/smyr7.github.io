
const display = document.getElementById('display');

function press(inp){
  if(display.value === 'Insert Equasions correctly'){
    display.value = '';
    display.value += inp;
  }else{
    display.value += inp;
  }
  
}
function clearing(){
  display.value = '';
}
function calculate(){
  let x = display.value;
  x = x.replace(/×/g, '*');
  x = x.replace(/÷/g, '/');
  try{
    display.value = eval(x);
  }
  catch(error){
    display.value = 'Insert Equasions correctly';
  }
}