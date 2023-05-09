window.onload=()=>{
 let inputValue = document.querySelector("#input");
 let button = document.querySelector("#btn");
 let secretBox =document.querySelector(".secret_box");
 let username =document.querySelector("#username");
 let secret =document.querySelector("#secret");
 let del =document.querySelector("#delete");
 let form= document.getElementsByTagName("form")[0];
 let arrayWishes= [
 "you're incredible💫","You're stronger than you look💪", "You're blessed😇","you're Amazing🌹","Relax,you're a call away to your blessings👏","You didnt Pray today🫣", "You havent call mum for long🥹", "You cant remember your best's friend last name🫢","You deserve better😘","You didnt brush today😁","God loves you🥰", "You cant dance to save yourself👻"];
 
 let randomWishes ="";
 let count=0;
 let num=0;
 
 
 
 
 //CASE 1:(Adding event function to button);
   
 button.addEventListener("click",(e)=>{
   count+=1;
   num+=1;
   let value= inputValue.value.trim();
     
   randomWishes = arrayWishes[Math.floor(Math.random() * arrayWishes.length)];
 
  
   if(value !== "" ){
       username.innerHTML= value;
      secret.innerHTML= randomWishes;
       secretBox.style.visibility="visible";
          if(num === 1){
            secretBox.style.animation="visible 5s forwards";
         }else if(num ===2){
            secretBox.style.animation="visibler 5s forwards";
             num=0;
   }//inner if statement;
       
       inputValue.style.borderColor="green";
       count=0;
       
    
   }else{
       alert("Please Enter your name to reveal secret message.");
       inputValue.style.borderColor="#ff1414";
    
        if(count === 1){
           inputValue.style.animation="shake .5s alternate";
    
       }else if(count ===2){
          inputValue.style.animation="shaker .5s alternate";
          count=0;
          num=0;
  }//inner if statement
   
   
      return ;
   
 }// End of Outer IF statement;
   
      
inputValue.value=" ";
        
                 
 });// End of Case 1.
    
    
    
 
 //CASE 2:(Adding event function to Delete key);  
    
  del.addEventListener("click",()=>{
      
   secretBox.style.visibility="hidden" ;
   inputValue.focus();
      
      
  });//End of case 2;  
    
    
    
    
    
    
}//End of General function() ✅