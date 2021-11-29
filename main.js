//CHANGE THE ICON AND VIEW THE PASSWORD

var state = false;
function showtoggle(){
    if(state){
        document.getElementById("myPassword").setAttribute("type","password");
        document.getElementById("eye").setAttribute("class", "far fa-eye");
        state = false;
    }

    else{
        document.getElementById("myPassword").setAttribute("type","text");
        document.getElementById("eye").setAttribute("class", "far fa-eye-slash");
        state = true;
    }
}

myPassword.onfocus = function(){
    document.getElementById("message").style.opacity = "1";
}

myPassword.onblur = function(){
    document.getElementById("message").style.opacity = "0";
}

//VALIDATION STARTS HERE

var Password = document.getElementById("myPassword");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var specialCHAR = document.getElementById("specialCHAR");
var length = document.getElementById("length");

Password.onkeyup = function(){
    //first Validation

    if(Password.value.match(/[0-9]/)){
        document.getElementById("numberIcon").setAttribute("class", "fas fa-check");
        number.classList.remove("invalid");
        number.classList.add("valid");
    }
    else{
        document.getElementById("numberIcon").setAttribute("class", "fas fa-times");
        number.classList.remove("valid");
        number.classList.add("invalid");
    }


        //Second Validation

        if(Password.value.match(/[^a-zA-Z]+/)){
            document.getElementById("charIcon").setAttribute("class", "fas fa-check");
            specialCHAR.classList.remove("invalid");
            specialCHAR.classList.add("valid");
        }
        else{
            document.getElementById("charIcon").setAttribute("class", "fas fa-times");
            specialCHAR.classList.remove("valid");
            specialCHAR.classList.add("invalid");
        }
}