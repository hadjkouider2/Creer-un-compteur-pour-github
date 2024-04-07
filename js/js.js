let number_centaine = document.getElementById('number1');
let number_dizaine = document.getElementById('number2');
let number_unite = document.getElementById('number3');

function ajouter_unite(){
   let value = +number_unite.textContent
   if(value>=9){
    number_unite.innerHTML=0;
    ajouter_dizaine()
   }else{
    number_unite.innerHTML = value + 1 

   }
   
}
function ajouter_dizaine(){
    let value = +number_dizaine.textContent
    if(value>=99){
        number_dizaine.innerHTML=10;
        ajouter_centaine()
       }else{
        number_dizaine.innerHTML = value  + 1
    
       }
    
}    
function ajouter_centaine(){
    let value = +number_centaine.textContent
    number_centaine.innerHTML = value  + 1
}
function moin_unite(){
    let value = +number_unite.textContent
    if(value>=1){
        number_unite.innerHTML = value - 1 
     moin_dizaine()
    }else{
     
     number_unite.innerHTML=0;
 
    }
    
 }
 function moin_dizaine(){
    let value = +number_dizaine.textContent
    if(value>=11){
        number_dizaine.innerHTML = value  - 1
        moin_centaine()
       }else{
        number_dizaine.innerHTML=10;
    
       }
    
}        
 function moin_centaine(){
    let value = +number_centaine.textContent
    if(value>=101){
        number_centaine.innerHTML = value  - 1
        moin_dizaine()
       }else{
        number_centaine.innerHTML=100;
    
       }
    
}        
   