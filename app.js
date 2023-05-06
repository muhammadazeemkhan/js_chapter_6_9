function question_1(){
   var a = parseInt(prompt("Enter a number"));
    document.write("The value of a is: " +  a);

    document.write("<br/>");

    var b = ++a
    document.write("The Value of ++a is: " + b);
    document.write("<br/>");
    document.write("Now the value of a is: " + b)

    document.write("<br/>");
    
    var c = b
    document.write("The value of a++ is: "+ c);
    document.write("<br/>");
    document.write("Now The value of a is: " +  ++ c)

    document.write("<br/>");


    var d = c
    document.write("The value od --a is: " + --d)
    document.write("<br/>");

    document.write("The value od a is: " + d)
    document.write("<br/>");

    document.write("The value od a-- is: " + d--)
    document.write("<br/>")
    document.write("The value od a is: " + d)

}


function question_2(){
  var a = 2 ;
  var b=1 ; 
  var c = --a;
  var d = --b;
  var e = ++b ;
  var f = b--;
  var result = c - d + e + f;
  alert("Result: " +result)
  alert("--a =  " + c)
  alert("--b = " + d)
  alert("++b = " + e)
  alert("b-- = " + f)
}



function question_3(){
   var userName = prompt("Enter your Name");
   alert("Hello " + userName)
}

function question_4(){

}


function question_5(){
   var table = parseInt(prompt("Enter Number"));
   var defaultNumber = 5 ;
    for(var i=1; i<=10; i++){
        if(table!==""){
         document.write(table + "x" + i + "=" + table*i + "<br/>")
        }else if(table===" "){
         document.write(defaultNumber + "x" + i + "=" + defaultNumber*i)

        }

    }
}

function question_6(){
    var firstSubject = prompt("Enter 1st Subject");
    var secondSubject = prompt("Enter 2nd Subject");
    var thirdSubject = prompt("Enter 3rd Subject");

    var totalMarks = +prompt("Enter Total Marks");
    var engObtMarks = +prompt("Enter 1st Subject Obtained Marks");
    var mthObtMarks = +prompt("Enter 2nd Subject Obtained Marks");
    var urduObtMarks = +prompt("Enter 3rd Subject Obtained Marks");

    document.getElementById("1stsub").innerHTML=firstSubject
    document.getElementById("2ndsub").innerHTML=secondSubject
    document.getElementById("3rdsub").innerHTML = thirdSubject
    document.getElementById("totalMarks").innerHTML = totalMarks
    document.getElementById("engObtMarks").innerHTML=engObtMarks
    document.getElementById("mthObtMarks").innerHTML=mthObtMarks
    document.getElementById("urduObtMarks").innerHTML=urduObtMarks



    document.getElementById("engPer").innerHTML = (engObtMarks*100)/totalMarks + "%"
    document.getElementById("mthPer").innerHTML = (mthObtMarks*100)/totalMarks + "%"
    document.getElementById("urduPer").innerHTML = (urduObtMarks*100)/totalMarks + "%"


}


    function question_7(){
        var userInput = prompt("Enter bakery items")
        var bakeryItems = ["cake","apple pie", "cookie" ,"chips","patties"];
        flag = true;
        for(var i=0; i<bakeryItems.length; i++){
            if(bakeryItems[i]===userInput){
                flag=true;
                alert(bakeryItems[i] + " is available at index " + i + " in our bakery" )
            }else{
                flag=false
                alert("We are Sorry. " + userInput + " is not available in our bakery")
            }
        }
    }

    function question_8(){
        var lgNUmber = [24,53,78,91,12];
        var a = -1 ;
        for(var i=0; i<lgNUmber.length; i++){
            if(lgNUmber[i] >a){
                a=lgNUmber[i]
            }
        }
        alert("The greatest Number is: " + a)
    }

    function question_9(){
        var lgNUmber = [24,53,78,91,12];
        var a = 100 ;
        for(var i=0; i<lgNUmber.length; i++){
            if(lgNUmber[i] <a){
                a=lgNUmber[i]
            }
        }
        alert("The smallest Number is: " + a)
    }

    function question_10(){
        for(var i=1; i<=100; i++){
            if(i%5===0){
                document.write(i + "<br/>")
            }
        }
    }