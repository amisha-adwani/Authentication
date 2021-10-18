 
const log=document.getElementById("login")
const sign = document.getElementById("signup")
sign.style.display = 'none'

function onClick(){
    if(sign.style.display == 'none'){
        sign.style.display = 'block'
        log.style.display = 'none'
    }
    else{
        sign.style.display = 'none'
        log.style.display = 'block'
    }
}





