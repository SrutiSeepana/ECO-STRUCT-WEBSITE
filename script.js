const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar){
    bar.addEventListener('click' , () => {
        nav.classList.add('active');
    })
}


if (close){
    close.addEventListener('click' , () => {
        nav.classList.remove('active');
    })
}





// Open the signup modal when clicking the "Sign Up" button
document.getElementById('newsletterSignUpBtn')?.addEventListener('click', function() {
    signupModal.style.display = 'block'; // Show the signup modal
});






// Login/Signup Modal Functionality
// Get the modal
var loginModal = document.getElementById("loginModal");
var signupModal = document.getElementById("signupModal");

// Get the button that opens the modal
var loginBtn = document.getElementById("login-btn");

// Get the <span> elements that close the modal
var closeBtns = document.getElementsByClassName("close");

// When the user clicks the login button, open the modal
loginBtn.onclick = function () {
    loginModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
for (var i = 0; i < closeBtns.length; i++) {
    closeBtns[i].onclick = function () {
        loginModal.style.display = "none";
        signupModal.style.display = "none"; // Close signup modal too
    }
}

// When the user clicks on the signup link, open the signup modal
document.getElementById("signup-link").onclick = function (event) {
    event.preventDefault();
    loginModal.style.display = "none";
    signupModal.style.display = "block";
}

// Close modal when clicking anywhere outside the modal
window.onclick = function (event) {
    if (event.target === loginModal) {
        loginModal.style.display = "none";
    } else if (event.target === signupModal) {
        signupModal.style.display = "none";
    }
}
// Get modal elements
var modal = document.getElementById("signupModal");
var signInLink = document.getElementById("signInLink");
var closeModal = document.getElementsByClassName("close")[0];

// Open the modal when "Sign In" is clicked
signInLink.onclick = function() {
  modal.style.display = "block";
}

// Close the modal when the "X" is clicked
closeModal.onclick = function() {
  modal.style.display = "none";
}

// Close the modal if the user clicks outside of the modal
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
