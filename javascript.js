
function start(){
document.getElementById('fm').style.display='block' ;
document.getElementById('btn1').style.display='none' ;
document.getElementById('btn2').style.display='block' ;
document.getElementById('btn3').style.display="block";
}


function end(){
document.getElementById('fm').style.display='none' ;
document.getElementById('btn2').style.display='none' ;
document.getElementById('btn1').style.display='block' ;
document.getElementById('btn3').style.display="none";


document.getElementById('printable').style.display='none';
document.getElementById('print').style.display='none';

}



//Full name

const text1=document.getElementById('name');
const btn3=document.getElementById('btn3');
const  out1=document.getElementById('name_out');
function fun1(){
    out1.innerHTML = "Name  :"+ text1.value;
}

btn3.addEventListener('click',fun1);



//Email


const text2=document.getElementById('email');
const btn4=document.getElementById('btn3');
const  out2=document.getElementById('email_out');
function fun2(){
    out2.innerHTML = "E-mail  :" + text2.value;
}

btn4.addEventListener('click',fun2);



//linkedin

const text3=document.getElementById('linkedin');
const btn5=document.getElementById('btn3');
const  out3=document.getElementById('linkedin_out');
function fun3(){
    out3.innerHTML = "LinkedIn :" + text3.value;
}

btn5.addEventListener('click',fun3);


//number

const text4=document.getElementById('number');
const btn6=document.getElementById('btn3');
const  out4=document.getElementById('number_out');
function fun4(){
    out4.innerHTML = "Mob. :" + text4.value;
}

btn6.addEventListener('click',fun4);

// experience

const text5=document.getElementById('experience');
const btn7=document.getElementById('btn3');
const  out5=document.getElementById('experience_out');
function fun5(){
    out5.innerHTML =  text5.value;
}

btn7.addEventListener('click',fun5);




//education


const text6=document.getElementById('education');
const btn8=document.getElementById('btn3');
const  out6=document.getElementById('education_out');
function fun6(){
    out6.innerHTML = text6.value;
}

btn8.addEventListener('click',fun6);


//key



const text7=document.getElementById('key');
const btn9=document.getElementById('btn3');
const  out7=document.getElementById('key_out');
function fun7(){
    out7.innerHTML =  text7.value;
}

btn9.addEventListener('click',fun7);



//skills


const text8=document.getElementById('skills');
const btn10=document.getElementById('btn3');
const  out8=document.getElementById('skills_out');
function fun8(){
    out8.innerHTML =  text8.value;
}

btn10.addEventListener('click',fun8);




//language

const text9=document.getElementById('language');
const btn11=document.getElementById('btn3');
const  out9=document.getElementById('language_out');
function fun9(){
    out9.innerHTML =  text9.value;
}

btn11.addEventListener('click',fun9);






//print resume

function myfunc(para){
    var full = document.body.innerHTML;
    var content = document.getElementById(para).innerHTML;

     document.body.innerHTML=content;
     window.print();
     document.body.innerHTML=full;


   
}


function previewOpen(){
    document.getElementById('printable').style.display='block';
    document.getElementById('print').style.display='block';
    document.getElementById('btn3').style.display='none';
    document.getElementById('btn3-pre').style.display='block';


}

function previewEnd(){
    document.getElementById('printable').style.display='none';
    document.getElementById('print').style.display='none';
    document.getElementById('btn3-pre').style.display='none';
    document.getElementById('btn3').style.display='block';
}

