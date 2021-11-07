document.getElementById("main-input").addEventListener("click",function(event){
    var allvalue = event.target.innerText;
    var monivalue = document.getElementById("main-output").value;
    

   if(allvalue == "C"){
    document.getElementById("main-output").value = "";
    document.getElementById("second-output").value = "";
   }

   else if(allvalue == '<'){
       document.getElementById("main-output").value = monivalue.slice(0, monivalue.lenght-1);
   }

   else if(allvalue == "="){
    document.getElementById("main-output").value =eval(monivalue);
    document.getElementById("second-output").value = monivalue;
   }

   else{
    document.getElementById("main-output").value = monivalue + allvalue;
   }

})


