//CHANGE THE ICON AND VIEW THE PASSWORD

var state = false;

function showtoggle() {
    if (state) {
        document.getElementById("myPassword").setAttribute("type", "password");
        document.getElementById("eye").setAttribute("class", "far fa-eye");
        state = false;
    } else {
        document.getElementById("myPassword").setAttribute("type", "text");
        document.getElementById("eye").setAttribute("class", "far fa-eye-slash");
        state = true;
    }
}

myPassword.onfocus = function () {
    document.getElementById("message").style.opacity = "1";
}

myPassword.onblur = function () {
    document.getElementById("message").style.opacity = "0";
}

//VALIDATION STARTS HERE

var Password = document.getElementById("myPassword");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var specialCHAR = document.getElementById("specialCHAR");
var length = document.getElementById("length");
var PassSweetalert = Password;

Password.onkeyup = function () {
    //first Validation

    if (Password.value.match(/[0-9]/)) {
        document.getElementById("numberIcon").setAttribute("class", "fas fa-check");
        number.classList.remove("invalid");
        number.classList.add("valid");
    } else {
        document.getElementById("numberIcon").setAttribute("class", "fas fa-times");
        number.classList.remove("valid");
        number.classList.add("invalid");
    }

    //Second Validation

    if (Password.value.match(/[^a-zA-Z0-9]+/)) {
        document.getElementById("charIcon").setAttribute("class", "fas fa-check");
        specialCHAR.classList.remove("invalid");
        specialCHAR.classList.add("valid");
    } else {
        document.getElementById("charIcon").setAttribute("class", "fas fa-times");
        specialCHAR.classList.remove("valid");
        specialCHAR.classList.add("invalid");
    }

    //Third Validation

    if (Password.value.match(/[A-Z]/)) {
        document.getElementById("capitalIcon").setAttribute("class", "fas fa-check");
        capital.classList.remove("invalid");
        capital.classList.add("valid");
    } else {
        document.getElementById("capitalIcon").setAttribute("class", "fas fa-times");
        capital.classList.remove("valid");
        capital.classList.add("invalid");
    }

    //Forth Validation

    if (Password.value.length >= 8) {
        document.getElementById("lengthIcon").setAttribute("class", "fas fa-check");
        length.classList.remove("invalid");
        length.classList.add("valid");
    } else {
        document.getElementById("lengthIcon").setAttribute("class", "fas fa-times");
        length.classList.remove("valid");
        length.classList.add("invalid");
    }


    //Final Alert Using Sweet Alert
    if (Password.value.match(/[0-9]/) && Password.value.match(/[^a-zA-Z0-9]+/) && Password.value.match(/[A-Z]/) && Password.value.length >= 8) {
        swal({
                title: "Perfect Password!",
                text: "Your actually password is: " + PassSweetalert.value + " , Do you want to change it?",
                icon: "success",
                buttons: true,
                dangerMode: true,
                buttons: ["No, it´s OK", "Yes!"],
            })
            .then((willDelete) => {
                if (willDelete) {
                    swal("Are you sure to delete it?", {
                            icon: "info",
                            button: "Yes!",
                        })
                        .then((value) => {
                            setTimeout(() => {
                                location.reload();
                            }, 100)
                        });

                } else {
                    swal("Great! Enjoy your new perfect password !", {
                        button: "Close",
                    });
                }
            });
    }
}