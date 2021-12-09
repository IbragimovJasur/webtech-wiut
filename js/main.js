let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let btn_search = document.getElementById('btn_search');
let btn_send = document.getElementById('send');
let btn_signup = document.getElementById('signup');
let place = document.getElementById('place');
let form_email = document.getElementById('form_email');
let form_comment = document.getElementById('form_comment');
let first_name = document.getElementById('first_name');
let last_name = document.getElementById('last_name');
let email = document.getElementById('email');

// Window Scrolling
window.onscroll = function() {
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
}

// Navigation
menu.addEventListener('click', function() {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

// Searching
searchBtn.addEventListener('click', function () {
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});

//FormValidation on the home page

btn_search.addEventListener('click', function(event){
    event.preventDefault();
    if (place.value.length == 0){
        place.style.border = '3px solid red'
    }
})

//FormValidation in filling the form

btn_send.addEventListener('click', function(event){
    event.preventDefault();
    if (!(form_email.value.includes('@'))){
        form_email.style.border = '3px solid red'
    }
})

//FormValidation in registration
btn_signup.addEventListener('click', function(event){
    //if first name input is blank
    if (first_name.value.length == 0){
        first_name.style.border = '3px solid red'
    }
    else {
        //if last name input is blank
        if (last_name.value.length == 0){
            last_name.style.border = '3px solid red'
        }
    }
})
