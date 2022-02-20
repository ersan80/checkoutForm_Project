let button_minus1 = document.getElementById("button1");
let word1 = document.getElementById("word1");
let button_plus1 = document.getElementById("button2");
let button_minus2 = document.getElementById("button3");
let word2 = document.getElementById("word2")
let button_plus2 = document.getElementById("button4");
let button_minus3 = document.getElementById("button5");
let word3 = document.getElementById("word3");
let button_plus3 = document.getElementById("button6");
let total = document.getElementById("total")
let control = document.getElementById("control1");
let link = document.querySelectorAll(".link");
let shipping_word = document.getElementById("shipping_word");
let ship = document.getElementById("ship");
let remove1 = document.getElementById("remove1");
let remove2 = document.getElementById("remove2");
let remove3 = document.getElementById("remove3");
let product1 = document.getElementById("product1");
let product2 = document.getElementById("product2");
let product3 = document.getElementById("product3");
let shipping = document.getElementById("shipping");
let subtotal = document.getElementById("subtotal");
let tax = document.getElementById("tax");


button_minus1.addEventListener("click",()=>{

    if(+word1.innerText>0){
        +word1.innerText--;
        subtotal.innerText= (+subtotal.innerText - Number(25.98)).toFixed(2);
        
        
    }


    else{
        word1.innerText = 0;
        
 
        
    }

 shipp();
 stotal();
 totall();
    
    })

   

 button_plus1.addEventListener("click",()=>{

    if(+word1.innerText>=0){
        +word1.innerText++;
        subtotal.innerText= (+subtotal.innerText+ Number(25.98)).toFixed(2);
    
   }

   else{
       word1.innerText = 0
   
   }

   shipp();
   stotal();
   totall();

})

button_minus2.addEventListener("click",()=>{

    if(+word2.innerText>0){
        +word2.innerText--;
        subtotal.innerText= (+subtotal.innerText - Number(45.99)).toFixed(2);  
    }
    else{
        word2.innerText = 0
        
    }
    shipp();
    stotal();
    totall();
})
 button_plus2.addEventListener("click",()=>{

    if(+word2.innerText>=0){
        +word2.innerText++;
        subtotal.innerText= (+subtotal.innerText+ Number(45.99)).toFixed(2);
       
   }
   else{
       word2.innerText = 0;
   }

   shipp();
   stotal();
   totall();
})

button_minus3.addEventListener("click",()=>{

    if(+word3.innerText>0){
        +word3.innerText--;
        subtotal.innerText= (+subtotal.innerText - Number(74.99)).toFixed(2);
        
       
    }

     else{
       word3.innerText = 0;
       
        
    }
    shipp();
    stotal();
    totall();
   
})

 button_plus3.addEventListener("click",()=>{

    if(+word3.innerText>=0){
        +word3.innerText++;
        subtotal.innerText= (+subtotal.innerText+ Number(74.99)).toFixed(2);
        
   }


   
   else{
       word3.innerText = 0;
       
   }
   shipp();
   stotal();
   totall();
   

})

remove1.addEventListener("click",()=>{
    product1.style.display = "none"
    if(+word1.innerText>=0){
       total.innerText = (+total.innerText-((+word1.innerText)*25.98)).toFixed(2)
    }
})

remove2.addEventListener("click",()=>{
    product2.style.display = "none"
    if(+word1.innerText>=0){
        total.innerText = (+total.innerText-((+word2.innerText)*45.99)).toFixed(2)
     }
   
})

remove3.addEventListener("click",()=>{
    product3.style.display = "none"
    if(+word1.innerText>=0){
        total.innerText = (+total.innerText-((+word3.innerText)*74.99)).toFixed(2)
     }
})

function stotal(){
    tax.innerText = (((+subtotal.innerText)*18)/100).toFixed(2)
}

function shipp () {
   
    if(+word1.innerText>=1 || +word2.innerText>=1 || +word3.innerText>=1 ){
        return ship.innerText = 19
    }

    else {
       return ship.innerText = 0;
    }
}

function totall (){
    total.innerText=`$${((+tax.innerText)+(+ship.innerText)+(+subtotal.innerText)).toFixed(2)}`

}


