
function add(){
    var a,b,c;
    a=Number(document.getElementById("first").value);
    b=Number(document.getElementById("second").value);
    c= a + b;
    
    document.getElementById("answer").value= c;
}

function multiply(){
    var a,b,c;
    a=Number(document.getElementById("first").value);
    b=Number(document.getElementById("second").value);
    c=a*b;
    document.getElementById("answer").value= c;
}

function hello(){
    alert("Hello World");
}

function swap(){
    var a,b,c;
    a=Number(document.getElementById("first").value);
    b=Number(document.getElementById("second").value);

    c=a;
    a=b;
    b=c;
    document.getElementById("answer1").value=a;
    document.getElementById("answer2").value=b;

}