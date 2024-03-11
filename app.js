let string="";
let buttons=document.querySelectorAll(".button");
let input=document.querySelector('input');
    input. addEventListener('keypress', (e) => {
     e.preventDefault()
     
    });

Array.from(buttons).forEach((button)=>{
 button.addEventListener('click',(e)=>{
    var snd=new Audio("click-button-140881.mp3");
    snd.play()
    snd.currentTime=0;
    if(e.target.innerHTML == '='){
        string=eval(string)
        input.value=string;
    }
    else if(e.target.innerHTML == 'AC'){
     string="";
     input.value=string;
    }
    else if(e.target.innerHTML == 'DEL'){
        string=string.substring(0,string.length-1);
        input.value=string;
    }
    
    
    else{
        console.log(e.target.innerHTML)
        string=string+e.target.innerText;
        document.querySelector(".input").value=string;
    }
 })
})



