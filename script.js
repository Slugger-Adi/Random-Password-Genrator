const lowercase = document.getElementById("a")
const uppercase = document.getElementById("b")
const symbol = document.getElementById("c")
const number = document.getElementById("d")
const inputLength = document.getElementById("length")
const show = document.getElementById("show")
const btn = document.getElementById("btn")
const output = document.getElementById('output')


btn.addEventListener("click",function(){
    let str=""
    let randomPassword = '';
    if (uppercase.checked){
        str+="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    }
    if (lowercase.checked){
        str+="abcdefghijklmnopqrstuvwxyz"
    }
    if (symbol.checked){
        str+="~!@#$%^&*()_+=-?,"
    }if (number.checked){
        str+="0123456789"
    }
    if(str == '' || inputLength.value == '' || inputLength.value <5 || inputLength.value >30){
        show.innerText = `*Enter the length and length must be lie b/w 5 - 30 and also select at least any one type*`
        output.value = 'Loading ...'
    }
    else{

        for(let i=0;i<inputLength.value;i++){
            let index = Math.trunc(Math.random()*str.length);
            randomPassword += `${str.at(index)}`;
            // console.log(randomPassword);
            
        }
        output.value = randomPassword;
        show.innerText = '';
    }
    // let ramdom_character = ""
    // if (str.length>5 && str.length<20){
    //     for (let i = 0; i < str.length; i++) {
    //       (Math.floor(Math.random()*str.length))
    //       ramdom_character+=str.at()  
    //       console.log(ramdom_character);
          
    //     }
    // }
    // show.innerHTML=`${ramdom_character}`
})