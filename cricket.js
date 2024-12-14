let Compuerchoice;
function generateComputerchoice (){
  let randomnumber = Math.random() * 3;
  
   if(randomnumber>0 && randomnumber<=1){
      Computerchoice = 'Bat';
      
   }else if(randomnumber>1 && randomnumber<=2){
      Computerchoice = 'Ball';

   }else{
      Computerchoice = 'Stump';
   }
      console.log(`Computerchoice is ${Computerchoice}`);
}